package NFL_Quaterback_Stats.NFL_Quaterback_Stats;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class LoadCSVToPostgres {
    public static void main(String[] args) {
        String jdbcURL = "jdbc:postgresql://localhost:5332/Quaterback_Stats";
        String username = "postgres";
        String password = "Adam1218";

        String csvFilePath = "C:\\Users\\Adamw\\OneDrive\\Desktop\\NFL_Quaterback_Stats\\nfl_player_stats_passing_2023.csv";

        int batchSize = 20;

        Connection connection = null;

        try {
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);

            String sql = "INSERT INTO player_stats (player_name, team, games, attempts, completions, completion_percentage, yards, ypa, touchdowns, touchdown_percentage, interceptions, interception_percentage, longest, sacks, sack_yards_lost, rating) "
                    + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sql);

            BufferedReader lineReader = new BufferedReader(new FileReader(csvFilePath));
            String lineText = null;

            int count = 0;

            lineReader.readLine(); // Skip header line

            while ((lineText = lineReader.readLine()) != null) {
                String[] data = lineText.split(",");

                String playerName = data[0];
                String team = data[1];
                int games = Integer.parseInt(data[2]);
                int attempts = Integer.parseInt(data[3]);
                int completions = Integer.parseInt(data[4]);
                float completionPercentage = Float.parseFloat(data[5]);
                String yards = data[6];
                float ypa = Float.parseFloat(data[7]);
                int touchdowns = Integer.parseInt(data[8]);
                float touchdownsPercentage = Float.parseFloat(data[9]);
                int interceptions = Integer.parseInt(data[10]);
                float interceptionPercentage = Float.parseFloat(data[11]);
                String longest = data[12];
                int sacks = Integer.parseInt(data[13]);
                int sackYardsLost = Integer.parseInt(data[14]);
                float rating = Float.parseFloat(data[15]);

                statement.setString(1, playerName);
                statement.setString(2, team);
                statement.setInt(3, games);
                statement.setInt(4, attempts);
                statement.setInt(5, completions);
                statement.setFloat(6, completionPercentage);
                statement.setString(7, yards);
                statement.setFloat(8, ypa);
                statement.setInt(9, touchdowns);
                statement.setFloat(10, touchdownsPercentage);
                statement.setInt(11, interceptions);
                statement.setFloat(12, interceptionPercentage);
                statement.setString(13, longest);
                statement.setInt(14, sacks);
                statement.setInt(15, sackYardsLost);
                statement.setFloat(16, rating);

                statement.addBatch();

                if (count % batchSize == 0) {
                    statement.executeBatch();
                }
            }

            lineReader.close();

            // Execute the remaining queries
            statement.executeBatch();

            connection.commit();
            connection.close();

            System.out.println("Data has been inserted successfully.");

        } catch (Exception e) {
            e.printStackTrace();
            try {
                if (connection != null) {
                    connection.rollback();
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }
}
