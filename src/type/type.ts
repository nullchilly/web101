export type BotProps = {
	id: string,
	name: string,
}

export type Puzzle = {
	fen?: string,
	title: string,
	player: string,
	moves: string[],
	results?: string,
	date?: string,
	id: string,
}

export type ShortMove = {
	from: string;
	to: string;
	promotion?: string;
}
