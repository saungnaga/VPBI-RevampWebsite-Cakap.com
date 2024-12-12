import React from 'react';
import SocialMediaIcon from '../atoms/socialmedia-icon';

import MailIcon from '@/public/icons/MailIcon';
import WhatsappIcon from '@/public/icons/WhatsappIcon';
import InstagramIcon from '@/public/icons/InstagramIcon';
import FacebookIcon from '@/public/icons/FacebookIcon';
import YoutubeIcon from '@/public/icons/YoutubeIcon';
import TwitterIcon from '@/public/icons/TwitterIcon';
import LinkedInIcon from '@/public/icons/LinkedInIcon';
import TiktokIcon from '@/public/icons/TiktokIcon';
import KominfoIcon from '@/public/icons/KominfoIcon';
import KemdikbudIcon from '@/public/icons/KemdikbudIcon';
import KemnakerIcon from '@/public/icons/KemnakerIcon';
import CakapIcon from '@/public/icons/CakapIcon';
import CakapTextIcon from '@/public/icons/CakapTextIcon';
import IsoIcon from '@/public/icons/IsoIcon';
import Sdg4Icon from '@/public/icons/Sdg4Icon';
import Sdg10Icon from '@/public/icons/Sdg10Icon';
import Sdg8Icon from '@/public/icons/Sdg8Icon';

const contactIconList = [
	{ href: '#', label: 'Mail Icon', Icon: MailIcon },
	{ href: '#', label: 'Whatsapp Icon', Icon: WhatsappIcon },
];

const socialMediaIconList = [
	{ href: '#', label: 'Instagram Icon', Icon: InstagramIcon },
	{ href: '#', label: 'Facebook Icon', Icon: FacebookIcon },
	{ href: '#', label: 'Youtube Icon', Icon: YoutubeIcon },
	{ href: '#', label: 'Twitter Icon', Icon: TwitterIcon },
	{ href: '#', label: 'LinkedIn Icon', Icon: LinkedInIcon },
	{ href: '#', label: 'Tiktok Icon', Icon: TiktokIcon },
];

const ContactSection = ({ contactIconList, description, contactNumber }) => (
	<div className='grid gap-2'>
		<p className='text-sm'>{description}</p>
		<p className='text-sm'>{contactNumber}</p>
		<div className='flex space-x-4'>
			{contactIconList.map(({ href, label, Icon }) => (
				<SocialMediaIcon
					key={label}
					label={label}
					href={href}
					Icon={Icon}
				/>
			))}
		</div>
	</div>
);

const RegistrationDetail = ({ Icon, details }) => (
	<div className='grid gap-2 px-4 pb-4 content-start'>
		<div className='grid justify-start h-9'>
			<Icon className='w-full h-full' />
		</div>
		{details.map((detail, index) => (
			<p key={index} className='text-sm'>
				{detail}
			</p>
		))}
	</div>
);

const Footer: React.FC = () => {
	return (
		<footer className='bg-blue-900 text-white'>
			{/* Header Section */}
			<div className='container mx-auto px-8 py-4'>
				<p>
					&copy; Copyright 2024 Cakap |
					<span className='font-bold'>
						{' '}
						PT Cerdas Digital Nusantara
					</span>
				</p>
			</div>
			<hr className='border-t border-white' />

			{/* Main Content */}
			<div className='py-8'>
				<div className='container mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
					{/* Section 1 */}
					<div className='px-4 grid content-start gap-4'>
						<div className='flex items-center gap-2'>
							<div>
								<CakapIcon />
							</div>
							<div>
								<CakapTextIcon />
							</div>
							<div className='border-r-2 w-2 h-10'></div>
							<div>
								<IsoIcon />
							</div>
						</div>
						<h4 className='font-bold'>
							Bersertifikat ISO 27001 menjaga data Anda dengan
							sepenuh hati
						</h4>
						<p className='text-sm'>
							Platform Upskilling #1 di Indonesia dan Mendukung 3
							Tujuan UNDP SDG Impact
						</p>
						<div className='flex items-center gap-2'>
							<div>
								<Sdg4Icon />
							</div>
							<div>
								<Sdg8Icon />
							</div>
							<div>
								<Sdg10Icon />
							</div>
						</div>
					</div>

					{/* Section 2 */}
					<div className='px-4 grid content-start gap-4'>
						<div className='grid gap-2'>
							<h4 className='font-bold'>Hubungi kami</h4>
						</div>
						<ContactSection
							contactIconList={contactIconList}
							description='Jam Pelayanan: 08:00 - 21:00 (GMT+7)'
							contactNumber='021-5091-1920'
						/>

						<ContactSection
							contactIconList={contactIconList}
							description='Punya pertanyaan mengenai program Prakerja
								Cakap?'
							contactNumber='+62 823-2589-8644'
						/>
					</div>

					{/* Section 3 */}
					<div className='px-4'>
						<h4 className='font-bold mb-4'>Ikuti Kami</h4>
						<div className='flex space-x-2'>
							{socialMediaIconList.map(
								({ href, label, Icon }) => (
									<SocialMediaIcon
										key={label}
										label={label}
										href={href}
										Icon={Icon}
									/>
								)
							)}
						</div>
					</div>
				</div>

				{/* Additional Information */}
				<div className='container mx-auto py-8 px-4 bg-blue-400 rounded-md'>
					<div className='mx-4'>
						<h4 className='font-bold mb-4'>Telah terdaftar oleh</h4>
					</div>
					<div className='container grid grid-cols-1 md:grid-cols-3'>
						<RegistrationDetail
							Icon={KominfoIcon}
							details={[
								'PB-UMKU: 912020024242500040001',
								'PSE: 008628.01/DJAI.PSE/12/2022',
							]}
						/>

						<RegistrationDetail
							Icon={KemdikbudIcon}
							details={[
								'Nama: LKP CAKAP (PT. CERDAS DIGITAL NUSANTARA',
								'NPSN: K9996958',
							]}
						/>

						<RegistrationDetail
							Icon={KemnakerIcon}
							details={[
								'Lisensi: 2/G1/3.17.3.02.1001.0.004.C.1.a/b/3/1-851.332/e/2021',
							]}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
