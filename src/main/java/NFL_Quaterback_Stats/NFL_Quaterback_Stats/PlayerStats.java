package NFL_Quaterback_Stats.NFL_Quaterback_Stats;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PostRemove;
import jakarta.persistence.Table;

@Entity
@Table(name = "player_stats")
public class PlayerStats {
    @Id
    private String player_name;
    private String team;
    private Integer games;
    private Integer attempts;
    private Integer completions;
    private Float completion_percentage;
    private String yards;
    private Float ypa;
    private Integer touchdowns;
    private Float touchdown_percentage;
    private Integer interceptions;
    private Float interception_percentage;
    private String longest;
    private Integer sacks;
    private Integer sack_yards_lost;
    private Integer rating;
    private String image_url;

    public PlayerStats(Integer rating, Integer sack_yards_lost, Integer sacks, String longest, Float interception_percentage, Integer interceptions, Float touchdown_percentage, Integer touchdowns, Float ypa, String yards, Float completion_percentage, Integer completions, Integer attempts, Integer games, String team, String player_name) {
        this.rating = rating;
        this.sack_yards_lost = sack_yards_lost;
        this.sacks = sacks;
        this.longest = longest;
        this.interception_percentage = interception_percentage;
        this.interceptions = interceptions;
        this.touchdown_percentage = touchdown_percentage;
        this.touchdowns = touchdowns;
        this.ypa = ypa;
        this.yards = yards;
        this.completion_percentage = completion_percentage;
        this.completions = completions;
        this.attempts = attempts;
        this.games = games;
        this.team = team;
        this.player_name = player_name;
        this.image_url = image_url;
    }

    public PlayerStats() {}

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Integer getSack_yards_lost() {
        return sack_yards_lost;
    }

    public void setSack_yards_lost(Integer sack_yards_lost) {
        this.sack_yards_lost = sack_yards_lost;
    }

    public Integer getSacks() {
        return sacks;
    }

    public void setSacks(Integer sacks) {
        this.sacks = sacks;
    }

    public String getLongest() {
        return longest;
    }

    public void setLongest(String longest) {
        this.longest = longest;
    }

    public Float getInterception_percentage() {
        return interception_percentage;
    }

    public void setInterception_percentage(Float interception_percentage) {
        this.interception_percentage = interception_percentage;
    }

    public Integer getInterceptions() {
        return interceptions;
    }

    public void setInterceptions(Integer interceptions) {
        this.interceptions = interceptions;
    }

    public Float getTouchdown_percentage() {
        return touchdown_percentage;
    }

    public void setTouchdown_percentage(Float touchdown_percentage) {
        this.touchdown_percentage = touchdown_percentage;
    }

    public Integer getTouchdowns() {
        return touchdowns;
    }

    public void setTouchdowns(Integer touchdowns) {
        this.touchdowns = touchdowns;
    }

    public Float getYpa() {
        return ypa;
    }

    public void setYpa(Float ypa) {
        this.ypa = ypa;
    }

    public String getYards() {
        return yards;
    }

    public void setYards(String yards) {
        this.yards = yards;
    }

    public Float getCompletion_percentage() {
        return completion_percentage;
    }

    public void setCompletion_percentage(Float completion_percentage) {
        this.completion_percentage = completion_percentage;
    }

    public Integer getCompletions() {
        return completions;
    }

    public void setCompletions(Integer completions) {
        this.completions = completions;
    }

    public Integer getAttempts() {
        return attempts;
    }

    public void setAttempts(Integer attempts) {
        this.attempts = attempts;
    }

    public Integer getGames() {
        return games;
    }

    public void setGames(Integer games) {
        this.games = games;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getPlayer_name() {
        return player_name;
    }

    public void setPlayer_name(String player_name) {
        this.player_name = player_name;
    }

    @Override
    public String toString() {
        return "PlayerStats{" +
                "player_name='" + player_name + '\'' +
                ", team='" + team + '\'' +
                ", games=" + games +
                ", attempts=" + attempts +
                ", completions=" + completions +
                ", completion_percentage=" + completion_percentage +
                ", yards='" + yards + '\'' +
                ", ypa=" + ypa +
                ", touchdowns=" + touchdowns +
                ", touchdown_percentage=" + touchdown_percentage +
                ", interceptions=" + interceptions +
                ", interception_percentage=" + interception_percentage +
                ", longest='" + longest + '\'' +
                ", sacks=" + sacks +
                ", sack_yards_lost=" + sack_yards_lost +
                ", rating=" + rating +
                ", image_url='" + image_url + '\'' +
                '}';
    }
}
