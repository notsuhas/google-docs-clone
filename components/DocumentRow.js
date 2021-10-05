import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, filename, date }) {
	return (
		<div>
			<Icon name="article" size="3xl" color="blue" />
			<p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
			<p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
		</div>
	);
}

export default DocumentRow;
