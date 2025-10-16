import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const upcomingGames = [
    { id: 1, date: "2025-10-20", time: "19:00", opponent: "Локомотив", home: true, venue: "Арена Шинник" },
    { id: 2, date: "2025-10-24", time: "18:30", opponent: "ЦСКА", home: false, venue: "ЦСКА Арена" },
    { id: 3, date: "2025-10-27", time: "19:00", opponent: "Спартак", home: true, venue: "Арена Шинник" },
  ];

  const pastGames = [
    { id: 1, date: "2025-10-13", opponent: "Авангард", score: "3:2", result: "win" },
    { id: 2, date: "2025-10-10", opponent: "СКА", score: "1:4", result: "loss" },
    { id: 3, date: "2025-10-06", opponent: "Металлург", score: "2:2", result: "draw" },
  ];

  const roster = [
    { id: 1, number: 27, name: "Иванов Петр", position: "Нападающий" },
    { id: 2, number: 13, name: "Смирнов Дмитрий", position: "Защитник" },
    { id: 3, number: 1, name: "Кузнецов Андрей", position: "Вратарь" },
    { id: 4, number: 9, name: "Попов Сергей", position: "Нападающий" },
    { id: 5, number: 44, name: "Соколов Михаил", position: "Защитник" },
    { id: 6, number: 18, name: "Лебедев Алексей", position: "Нападающий" },
  ];

  const standings = [
    { position: 1, team: "СКА", games: 15, wins: 12, losses: 3, points: 36 },
    { position: 2, team: "ЦСКА", games: 15, wins: 11, losses: 4, points: 33 },
    { position: 3, team: "Динамо Шинник", games: 15, wins: 9, losses: 6, points: 27, highlight: true },
    { position: 4, team: "Локомотив", games: 15, wins: 8, losses: 7, points: 24 },
    { position: 5, team: "Авангард", games: 15, wins: 7, losses: 8, points: 21 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <nav className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">Д</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ДИНАМО ШИННИК
                </h1>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#calendar" className="text-foreground hover:text-primary transition-colors">КАЛЕНДАРЬ</a>
              <a href="#roster" className="text-foreground hover:text-primary transition-colors">СОСТАВ</a>
              <a href="#standings" className="text-foreground hover:text-primary transition-colors">ТАБЛИЦА</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">СЕЗОН 2025</Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-4 text-foreground">
              ПОБЕЖДАЕМ<br />ВМЕСТЕ
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Хоккейный клуб с историей и амбициями
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-bold transition-all hover:scale-105">
                КУПИТЬ БИЛЕТ
              </button>
              <button className="bg-card border border-border hover:bg-card/80 text-foreground px-8 py-3 rounded-lg font-bold transition-all hover:scale-105">
                О КОМАНДЕ
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="py-16 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon name="Calendar" size={32} className="text-primary" />
          <h2 className="text-4xl font-bold text-foreground">КАЛЕНДАРЬ ИГР</h2>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">ПРЕДСТОЯЩИЕ</TabsTrigger>
            <TabsTrigger value="past">РЕЗУЛЬТАТЫ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingGames.map((game) => (
              <Card key={game.id} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[80px]">
                        <p className="text-sm text-muted-foreground">{game.date}</p>
                        <p className="text-2xl font-bold text-primary">{game.time}</p>
                      </div>
                      <div className="h-12 w-px bg-border"></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold">ДИНАМО ШИННИК</h3>
                          {game.home && <Badge variant="secondary">ДОМА</Badge>}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span>VS</span>
                          <span className="font-semibold">{game.opponent}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{game.venue}</span>
                      </div>
                      <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded font-bold transition-all hover:scale-105">
                        БИЛЕТЫ
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastGames.map((game) => (
              <Card key={game.id} className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-muted-foreground min-w-[100px]">{game.date}</p>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">ДИНАМО ШИННИК</span>
                        <span className="text-muted-foreground">VS</span>
                        <span className="font-bold">{game.opponent}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold">{game.score}</p>
                      <Badge className={
                        game.result === "win" ? "bg-green-600 text-white" :
                        game.result === "loss" ? "bg-red-600 text-white" :
                        "bg-yellow-600 text-white"
                      }>
                        {game.result === "win" ? "ПОБЕДА" : game.result === "loss" ? "ПОРАЖЕНИЕ" : "НИЧЬЯ"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      <section id="roster" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Users" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">СОСТАВ КОМАНДЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roster.map((player) => (
              <Card key={player.id} className="bg-card/50 backdrop-blur border-border hover:border-secondary transition-all hover:scale-105 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{player.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{player.position}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-foreground">{player.number}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      #{player.number}
                    </Badge>
                    <Badge variant="outline">
                      {player.position}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="standings" className="py-16 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon name="Trophy" size={32} className="text-primary" />
          <h2 className="text-4xl font-bold text-foreground">ТУРНИРНАЯ ТАБЛИЦА</h2>
        </div>

        <Card className="bg-card/50 backdrop-blur border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-bold">#</th>
                  <th className="text-left p-4 font-bold">КОМАНДА</th>
                  <th className="text-center p-4 font-bold">И</th>
                  <th className="text-center p-4 font-bold">В</th>
                  <th className="text-center p-4 font-bold">П</th>
                  <th className="text-center p-4 font-bold">ОЧКИ</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr 
                    key={team.position} 
                    className={`border-b border-border transition-colors ${
                      team.highlight 
                        ? "bg-primary/20 hover:bg-primary/30" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <td className="p-4 font-bold">
                      {team.highlight && (
                        <Badge className="bg-secondary text-secondary-foreground mr-2">НАШ</Badge>
                      )}
                      {team.position}
                    </td>
                    <td className="p-4 font-bold text-lg">{team.team}</td>
                    <td className="text-center p-4">{team.games}</td>
                    <td className="text-center p-4 text-green-500 font-semibold">{team.wins}</td>
                    <td className="text-center p-4 text-red-500 font-semibold">{team.losses}</td>
                    <td className="text-center p-4">
                      <span className="text-2xl font-bold text-primary">{team.points}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">ДИНАМО ШИННИК</h3>
              <p className="text-muted-foreground">Хоккейный клуб с богатой историей и традициями</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">КОНТАКТЫ</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@dinamoshinnik.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">СОЦИАЛЬНЫЕ СЕТИ</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 Динамо Шинник. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
