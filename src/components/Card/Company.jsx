import Image from "next/image";

export default function CompanyCard({ company }) {
	return (
		<div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-sm p-2">
			<div className="relative">
				<Image src={company.coverImage} alt="Cover" className="w-full rounded-xl h-40 object-cover" height="100" width="100"></Image>
				<Image
					src={company.profileImage}
					alt="Profile"
					height="100"
					width="100"
					className="absolute left-4 transform top-24 w-24 h-24 rounded-full border-4 border-white"
				></Image>
			</div>
			<div className="flex flex-col justify-between gap-1 mt-4 p-3">
				<div className="font-bold text-xl">{company.name}</div>
				<div className="text-gray-500">@{company.username}</div>
				<p className="text-gray-700 text-sm line-clamp-2">{company.description}</p>
				<div className="flex justify-between items-center mt-2">
					<div>
						<div className="text-lg font-bold">{company.stats.stx}</div>
						<div className="text-gray-500 text-sm">Collected</div>
					</div>
					<div>
						<div className="text-lg font-bold">{company.stats.followers}</div>
						<div className="text-gray-500 text-sm">Followers</div>
					</div>
					<button className="bg-black text-white rounded px-6 py-2">View</button>
				</div>
			</div>
		</div>
	);
}