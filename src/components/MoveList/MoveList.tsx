import { Move } from "chess.js";
import MoveItem from "./MoveItem";
import { BotProps } from "@/types";
import React from "react";
import PlayerInfoCard from "@/components/Card/PlayerInfoCard";
import { AnalysisScore } from "@/helpers/types";

type MoveListType = {
  moves: Move[];
  bot: BotProps;
  scores?: AnalysisScore[];
};

const MoveList: React.FC<MoveListType> = ({ moves, bot, scores }) => {
  return (
    <div>
      <div className="flex pt-4 pb-4">
        <ul className="max-h-[550px] h-[550px] w-[450px] overflow-y-auto divide-y border rounded-lg">
          <li className="sticky top-0">
            <PlayerInfoCard id={bot.id} name={bot.name} inGame={true} />
          </li>
          <div>
            {moves?.map((move, index) => (
              <MoveItem move={move} key={index} score={scores ? scores[moves.length - 1 - index] : undefined}/>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MoveList;
