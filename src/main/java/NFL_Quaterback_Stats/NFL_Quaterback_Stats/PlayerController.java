package NFL_Quaterback_Stats.NFL_Quaterback_Stats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/fetch")
public class PlayerController {

    private final PlayerRepo playerRepo;

    @Autowired
    public PlayerController(PlayerRepo playerRepo) {
        this.playerRepo = playerRepo;
    }

    @GetMapping
    public List<PlayerStats> fetchAllPlayers(){
        return playerRepo.findAll();
    }

    @GetMapping("/{playerName}")
    public Optional<PlayerStats> fetchPlayersByName(@PathVariable("playerName") String playerName){
        return playerRepo.findById(playerName);
    }

    @GetMapping("/most-yards")
    public List<PlayerStats> fetchMostYards(){
        return playerRepo.findAllOrderByYards();
    }

    @GetMapping("/most-sacked")
    public List<PlayerStats> fetchMostSacked(){
        return playerRepo.findAllOrderBySacks();
    }

    @GetMapping("/most-interceptions")
    public List<PlayerStats> fetchMostInterceptions(){
        return playerRepo.findAllOrderByInterceptions();
    }
}
