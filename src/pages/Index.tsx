import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('calendar');

  const games = [
    { id: 1, date: '20.10.2024', time: '19:00', opponent: 'Торпедо', location: 'Домашний', score: null, status: 'upcoming' },
    { id: 2, date: '24.10.2024', time: '18:30', opponent: 'Спартак', location: 'Выездной', score: null, status: 'upcoming' },
    { id: 3, date: '27.10.2024', time: '19:00', opponent: 'ЦСКА', location: 'Домашний', score: null, status: 'upcoming' },
    { id: 4, date: '15.10.2024', time: '19:00', opponent: 'Локомотив', location: 'Выездной', score: '3:2', status: 'win' },
    { id: 5, date: '12.10.2024', time: '18:30', opponent: 'СКА', location: 'Домашний', score: '1:4', status: 'loss' },
    { id: 6, date: '08.10.2024', time: '19:00', opponent: 'Авангард', location: 'Выездной', score: '2:2', status: 'draw' },
  ];

  const roster = [
    { id: 1, number: 91, name: 'Александр Иванов', position: 'Нападающий', age: 28 },
    { id: 2, number: 27, name: 'Дмитрий Петров', position: 'Защитник', age: 25 },
    { id: 3, number: 1, name: 'Игорь Смирнов', position: 'Вратарь', age: 30 },
    { id: 4, number: 17, name: 'Михаил Козлов', position: 'Нападающий', age: 24 },
    { id: 5, number: 44, name: 'Сергей Волков', position: 'Защитник', age: 27 },
    { id: 6, number: 10, name: 'Андрей Морозов', position: 'Нападающий', age: 26 },
    { id: 7, number: 5, name: 'Николай Лебедев', position: 'Защитник', age: 29 },
    { id: 8, number: 30, name: 'Владимир Соколов', position: 'Вратарь', age: 32 },
  ];

  const standings = [
    { position: 1, team: 'СКА', games: 15, wins: 12, draws: 1, losses: 2, points: 37, form: ['W', 'W', 'W', 'D', 'W'] },
    { position: 2, team: 'ЦСКА', games: 15, wins: 11, draws: 2, losses: 2, points: 35, form: ['W', 'W', 'L', 'W', 'W'] },
    { position: 3, team: 'Динамо Шинник', games: 15, wins: 10, draws: 2, losses: 3, points: 32, form: ['W', 'L', 'W', 'D', 'W'] },
    { position: 4, team: 'Авангард', games: 15, wins: 9, draws: 3, losses: 3, points: 30, form: ['D', 'W', 'W', 'D', 'L'] },
    { position: 5, team: 'Локомотив', games: 15, wins: 8, draws: 2, losses: 5, points: 26, form: ['L', 'W', 'L', 'W', 'W'] },
    { position: 6, team: 'Спартак', games: 15, wins: 7, draws: 3, losses: 5, points: 24, form: ['L', 'D', 'W', 'L', 'W'] },
    { position: 7, team: 'Торпедо', games: 15, wins: 5, draws: 2, losses: 8, points: 17, form: ['L', 'L', 'W', 'D', 'L'] },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'win': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'loss': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'draw': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-primary/20 text-primary border-primary/50';
    }
  };

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return 'bg-green-500';
      case 'L': return 'bg-red-500';
      case 'D': return 'bg-yellow-500';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/af13a2ae-bdf0-4e80-8fc0-06b61daa7d2d/files/c00e068a-71b8-47f8-8046-1f09918af092.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-primary">
              <img 
                src="https://cdn.poehali.dev/projects/af13a2ae-bdf0-4e80-8fc0-06b61daa7d2d/files/88528ebd-753f-420e-98af-f3003288f9e6.jpg" 
                alt="Динамо Шинник" 
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white tracking-wider">
            ДИНАМО <span className="text-primary">ШИННИК</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">Хоккейный Клуб</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Badge className="px-6 py-2 text-lg bg-primary/90 hover:bg-primary">Сезон 2024/2025</Badge>
            <Badge className="px-6 py-2 text-lg bg-secondary/90 hover:bg-secondary text-secondary-foreground">3 место в лиге</Badge>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex gap-2 py-4 overflow-x-auto">
            <Button
              variant={activeSection === 'calendar' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('calendar')}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="Calendar" size={20} />
              Календарь игр
            </Button>
            <Button
              variant={activeSection === 'roster' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('roster')}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="Users" size={20} />
              Состав команды
            </Button>
            <Button
              variant={activeSection === 'standings' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('standings')}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="Trophy" size={20} />
              Таблица
            </Button>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {activeSection === 'calendar' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Icon name="Calendar" size={36} className="text-primary" />
              Календарь игр
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Предстоящие матчи</h3>
              <div className="grid gap-4">
                {games.filter(g => g.status === 'upcoming').map(game => (
                  <Card key={game.id} className="p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">{game.date.split('.')[0]}</div>
                          <div className="text-sm text-muted-foreground">{game.date.split('.')[1]}.{game.date.split('.')[2]}</div>
                        </div>
                        <div className="h-16 w-px bg-border"></div>
                        <div>
                          <div className="text-2xl font-bold mb-1">Динамо Шинник vs {game.opponent}</div>
                          <div className="flex gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={16} />
                              {game.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MapPin" size={16} />
                              {game.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-2">
                        Предстоящий
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Прошедшие матчи</h3>
              <div className="grid gap-4">
                {games.filter(g => g.status !== 'upcoming').map(game => (
                  <Card key={game.id} className="p-6 hover:border-accent transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{game.date.split('.')[0]}</div>
                          <div className="text-xs text-muted-foreground">{game.date.split('.')[1]}.{game.date.split('.')[2]}</div>
                        </div>
                        <div className="h-16 w-px bg-border"></div>
                        <div>
                          <div className="text-xl font-bold mb-1">Динамо Шинник vs {game.opponent}</div>
                          <div className="text-sm text-muted-foreground">{game.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold">{game.score}</div>
                        <Badge className={getStatusColor(game.status)}>
                          {game.status === 'win' ? 'Победа' : game.status === 'loss' ? 'Поражение' : 'Ничья'}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'roster' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Icon name="Users" size={36} className="text-primary" />
              Состав команды
            </h2>
            
            {['Вратарь', 'Защитник', 'Нападающий'].map(position => (
              <div key={position} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">{position === 'Вратарь' ? 'Вратари' : position === 'Защитник' ? 'Защитники' : 'Нападающие'}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {roster.filter(p => p.position === position).map(player => (
                    <Card key={player.id} className="p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-2xl font-bold">{player.number}</span>
                        </div>
                        <div>
                          <div className="text-xl font-bold mb-1">{player.name}</div>
                          <div className="text-sm text-muted-foreground">{player.age} лет</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'standings' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Icon name="Trophy" size={36} className="text-primary" />
              Турнирная таблица
            </h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-card border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-bold">#</th>
                      <th className="text-left p-4 font-bold">Команда</th>
                      <th className="text-center p-4 font-bold">И</th>
                      <th className="text-center p-4 font-bold">В</th>
                      <th className="text-center p-4 font-bold">Н</th>
                      <th className="text-center p-4 font-bold">П</th>
                      <th className="text-center p-4 font-bold">О</th>
                      <th className="text-left p-4 font-bold">Форма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map(team => (
                      <tr 
                        key={team.position} 
                        className={`border-b border-border hover:bg-muted/50 transition-colors ${team.team === 'Динамо Шинник' ? 'bg-primary/10' : ''}`}
                      >
                        <td className="p-4">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">
                            {team.position}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-lg">{team.team}</div>
                        </td>
                        <td className="text-center p-4">{team.games}</td>
                        <td className="text-center p-4 text-green-400">{team.wins}</td>
                        <td className="text-center p-4 text-yellow-400">{team.draws}</td>
                        <td className="text-center p-4 text-red-400">{team.losses}</td>
                        <td className="text-center p-4">
                          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-primary-foreground font-bold">
                            {team.points}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            {team.form.map((result, idx) => (
                              <div 
                                key={idx} 
                                className={`w-6 h-6 rounded-full ${getFormColor(result)} flex items-center justify-center text-xs font-bold`}
                              >
                                {result}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span>Победа</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span>Ничья</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span>Поражение</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-card border-t border-border mt-20">
        <div 
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/af13a2ae-bdf0-4e80-8fc0-06b61daa7d2d/files/0f7a3a49-395c-4feb-b01f-fa2b417f872d.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">Динамо Шинник</h3>
            <p className="text-muted-foreground mb-6">Хоккейный клуб основан в 1946 году</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2024 ХК Динамо Шинник. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
