import Button from '../atoms/button';
import { CardLanguageProps } from './types/card-language.types';

export const CardLanguage: React.FC<CardLanguageProps> = ({ languages }) => {
	// Filter data untuk hanya menampilkan elemen dengan properti yang valid
	const filteredLanguages = languages.filter(
		(language) =>
			language.title ||
			language.live ||
			language.textTopic ||
			language.textLink
	);

	// Jika tidak ada data yang valid, kembalikan null (tidak menampilkan apapun)
	if (filteredLanguages.length === 0) {
		return null;
	}

	return (
		<>
			{filteredLanguages.map((language) => (
				<div
					className='relative border shadow-md p-6 rounded-2xl bg-white hover:shadow-lg grid gap-2'
					key={language.id}
				>
					{/* Badge live */}
					{language.live && (
						<div className='absolute top-2 right-2 px-4 py-1 rounded-full bg-red-600 text-white text-sm'>
							{language.live}
						</div>
					)}

					{/* Title */}
					{language.title && (
						<h3 className='text-3xl font-bold'>{language.title}</h3>
					)}

					{/* Content with consistent layout */}
					<div className='flex flex-col justify-between gap-2 h-full'>
						{(language.textTopic ||
							language.topic ||
							language.date) && (
							<div className='text-slate-500 space-y-1 mb-4'>
								{language.textTopic && (
									<span>{language.textTopic}</span>
								)}{' '}
								{language.topic && (
									<span
										className={`font-bold text-sm ${language.topic}`}
									></span>
								)}
								{language.date && (
									<div className='text-xs'>
										{language.date}
									</div>
								)}
							</div>
						)}
						{!language.date && (
							<div className='invisible text-sm mb-4'>
								{/* Placeholder untuk konsistensi tata letak */}
								Placeholder date
							</div>
						)}
					</div>

					{/* Button */}
					<div className='flex justify-center mt-auto'>
						<Button variant='blue'>
							{language.textLink || ' '}
						</Button>
					</div>
				</div>
			))}
		</>
	);
};
