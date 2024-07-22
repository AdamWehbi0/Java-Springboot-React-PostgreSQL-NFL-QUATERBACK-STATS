package NFL_Quaterback_Stats.NFL_Quaterback_Stats;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface PlayerRepo extends JpaRepository<PlayerStats,String> {

    @Query("SELECT p FROM PlayerStats p ORDER BY p.yards DESC")
    List<PlayerStats> findAllOrderByYards();

    @Query("SELECT p FROM PlayerStats p ORDER BY p.sacks DESC")
    List<PlayerStats> findAllOrderBySacks();

    @Query("SELECT p FROM PlayerStats p ORDER BY p.interceptions DESC")
    List<PlayerStats> findAllOrderByInterceptions();
}
