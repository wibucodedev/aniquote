import { memo } from "react";
import * as UI from "react-daisyui";
import * as Fi from "react-icons/fi";

const Quote = memo(({ title, image, quote }) => {
	return (
		<UI.Card side="lg" className="text-center bg-gray-700 border-2 border-white">
			<figure>
				<img src={image} />
			</figure>
			<UI.Card.Body className="text-center">
				<UI.Card.Title className="text-gray-300">
					<div className="text-cyan-500">By:</div> {title}
				</UI.Card.Title>
				<div className="w-80 h-full border-y-2 border-white  items-center justify-center flex">
					<p className="text-white">{quote}</p>
				</div>
				<UI.Card.Actions className="justify-end pt-3">
					<UI.Button href={"/character/" + title} className="normal-case">
						See more from <p className="capitalize">&nbsp;{title}</p>
					</UI.Button>
				</UI.Card.Actions>
			</UI.Card.Body>
		</UI.Card>
	);
});

export { Quote };
