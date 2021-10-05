import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useState } from "react";

function DocumentRow({ id, filename, date }) {
	const router = useRouter();

	const [showModal, setShowModal] = useState(false);

	const delDocument = () => {
		db.collection("userDocs").doc(session.user.email).collection("docs").add({
			filename: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setShowModal(false);
	};

	const modal = (
		<Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
			<ModalFooter>
				<Button
					color="blue"
					buttonType="link"
					onClick={(e) => setShowModal(false)}
					ripple="dark">
					Cancel
				</Button>
				<Button
					color="blue"
					buttonType="filled"
					// onClick={delDocument}
					ripple="light">
					Delete
				</Button>
			</ModalFooter>
		</Modal>
	);

	return (
		<div className="flex items-center">
			{modal}
			<div
				onClick={() => router.push(`/doc/${id}`)}
				className="flex flex-grow items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
				<Icon name="article" size="3xl" color="blue" />
				<p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
				<p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
			</div>
				<Button
					color="gray"
					buttonType="outline"
					rounded={true}
					iconOnly={true}
					onClick={() => setShowModal(true)}
					ripple="dark"
					className="border-0">
					<Icon name="more_vert" size="3xl" />
				</Button>
		</div>
	);
}

export default DocumentRow;
