export function matchMaker (eastTeam, westTeam, stages) {
  var matches = []
  for (var i = 0, j = 6; i < j; i++){
    var match = {east: {characters: null, players: null}, west: {characters: null, players: null}}
    if (eastTeam.characters[i].player.includes('d')){
      match.east.characters = [eastTeam.characters[i].character, eastTeam.characters[i + 1].character]
      match.east.players = [eastTeam.players[i].tag, eastTeam.players[i + 1].tag]
      match.west.characters = [westTeam.characters[i].character, westTeam.characters[i + 1].character]
      match.west.players = [westTeam.players[i].tag, westTeam.players[i + 1].tag]
      i++
    } else {
      match.east.characters = [eastTeam.characters[i].character]
      match.east.players = [eastTeam.players[i].tag]
      match.west.characters = [westTeam.characters[i].character]
      match.west.players = [westTeam.players[i].tag]
    }
    matches.push(match)
  }
  for (var i = 0, j = 4; i < j; i++){
    matches[i].stage = stages[i].stage
    matches[i].name = stages[i].match
  }
  return matches
}