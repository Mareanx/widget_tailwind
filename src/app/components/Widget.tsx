import {
  Activity,
  Clock,
  Clock1,
  Cloud,
  Github,
  Heart,
  Mail,
} from "lucide-react";

export function Widget() {
  return (
    <div className=" w-[448px] rounded overflow-hidden ">
      <div className="bg-slate-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-pink-600 font-bold text-sm hover:text-pink-800">
          MARCAR TODAS COMO LIDA
        </button>
      </div>

      <div>
        <div className="bg-slate-950 px-6 py-1">Recentes</div>

        <div className="bg-slate-900 px-8 py-4 flex items-center gap-6">
          <Cloud className="w-8 h-7 text-pink-600" />
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-sm leading-relaxed text-zinc-100 hover:text-zinc-400 cursor-pointer">
              Supere os desafios de sua empresa com os serviços de computação em
              nuvem...
            </p>
            <div className="text-xxs text-zinc-400 flex items-center gap-2">
              <span>anúncio</span>
              <span> há 1 minuto</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 px-8 py-4 flex items-center gap-6 mt-1">
        <Heart className="w-8 h-7 text-pink-600" />
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm leading-relaxed text-zinc-100 hover:text-zinc-400 cursor-pointer">
            Talvez você possa curtir essas publicações selecionadas
            especialmente para você...
          </p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>notificação</span>
            <span> há 2 minuto</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 px-6 py-1">Antigas</div>
      <div className="bg-slate-900 px-8 py-4 flex items-center gap-6 mt-1">
        <Github className="w-8 h-7 text-pink-600" />
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm leading-relaxed text-zinc-100 hover:text-zinc-400 cursor-pointer">
            Modo sudo- Antes de executar uma ação clique aqui e realize a
            autenticação
          </p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>Github</span>
            <span> há 1 dia</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 px-8 py-4 flex items-center gap-6 mt-1">
        <Clock className="w-8 h-7 text-pink-600" />
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm leading-relaxed text-zinc-100 hover:text-zinc-400 cursor-pointer">
            Reunião da equipe às 14:00. certifique-se de estar preparado com
            todas as atualizações e materiais necessários
          </p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>notificação</span>
            <span> 22 de junho </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 px-8 py-4 flex items-center gap-6 mt-1">
        <Mail className="w-8 h-7 text-pink-600" />
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm leading-relaxed text-zinc-100 hover:text-zinc-400 cursor-pointer">
            Você possui uma nova mensagem de John Doe
          </p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>notificação</span>
            <span>15 de junho </span>
          </div>
        </div>
      </div>
    </div>
  );
}
