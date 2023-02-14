import * as Card from "../components/card";
import "../styles/tailwind.css";

export default function Test() {
	return (
		<div className="flex justify-center my-32">
			<Card.Quote title={"Naruto"} image="https://cdn.myanimelist.net/images/characters/2/284121.jpg" quote={"The difference in judgement between you and me, originates from different rules derived from past experience."}></Card.Quote>
		</div>
	);
}
