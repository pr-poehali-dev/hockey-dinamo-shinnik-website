import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('calendar');

  const games = [
    { id: 1, date: '01.09.2024', opponent: 'Белые медведи', score: '3:0', status: 'win', note: '' },
    { id: 2, date: '08.09.2024', opponent: 'Кузнецкие медведи', score: '2:1', status: 'win', note: '' },
    { id: 3, date: '15.09.2024', opponent: 'Югра', score: '2:0', status: 'win', note: '' },
    { id: 4, date: '22.09.2024', opponent: 'Локо', score: '6:5', status: 'win', note: '(ОТ)' },
    { id: 5, date: '29.09.2024', opponent: 'Алмаз', score: '5:0', status: 'win', note: '' },
    { id: 6, date: '06.10.2024', opponent: 'Сибирские снайперы', score: '2:1', status: 'win', note: '(Б)' },
    { id: 7, date: '13.10.2024', opponent: 'ДСПб', score: 'ТП', status: 'loss', note: 'Старый календарь' },
    { id: 8, date: '20.10.2024', opponent: 'Стальные лисы', score: '0:3', status: 'loss', note: 'Техн. поражение' },
  ];

  const roster = [
    { id: 1, number: 5, name: 'Unnamed', position: 'Вратарь' },
    { id: 2, number: 99, name: 'Morfyy', position: 'Вратарь' },
    { id: 3, number: 19, name: 'Ylokz', position: 'Защитник' },
    { id: 4, number: 35, name: 'николаич', position: 'Защитник' },
    { id: 5, number: 53, name: 'quantum', position: 'Нападающий' },
    { id: 6, number: 3, name: 'estriper', position: 'Нападающий' },
    { id: 7, number: 21, name: 'Gazash', position: 'Нападающий' },
    { id: 8, number: 54, name: 'крико', position: 'Нападающий' },
    { id: 9, number: 0, name: 'huksyy', position: 'Нападающий' },
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
            <Badge className="px-6 py-2 text-lg bg-green-500/90 hover:bg-green-500 text-white">8 побед из 8 игр</Badge>
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-secondary">Регулярный чемпионат</h3>
                <div className="flex gap-4 items-center">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 text-lg">
                    6 побед
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/50 px-4 py-2 text-lg">
                    2 поражения
                  </Badge>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                <p className="text-lg text-center">
                  <span className="font-bold text-primary">8 из 8 успешных игр</span> • Осталось 9 игр • <span className="text-green-400 font-bold">Цель: 9/9</span>
                </p>
              </div>
              <div className="grid gap-4">
                {games.map(game => (
                  <Card key={game.id} className="p-6 hover:border-accent transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center min-w-[80px]">
                          <div className="text-2xl font-bold">{game.date.split('.')[0]}</div>
                          <div className="text-xs text-muted-foreground">{game.date.split('.')[1]}.{game.date.split('.')[2]}</div>
                        </div>
                        <div className="h-16 w-px bg-border"></div>
                        <div>
                          <div className="text-xl font-bold mb-1">Динамо Шинник vs {game.opponent}</div>
                          {game.note && <div className="text-sm text-muted-foreground italic">{game.note}</div>}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold">{game.score}</div>
                        <Badge className={getStatusColor(game.status)}>
                          {game.status === 'win' ? 'Победа' : 'Поражение'}
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
                          <span className="text-2xl font-bold">{player.number === 0 ? '-' : player.number}</span>
                        </div>
                        <div>
                          <div className="text-xl font-bold mb-1">{player.name}</div>
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