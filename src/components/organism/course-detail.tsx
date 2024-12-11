'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type BuyButtonProps = {
	text: string;
	onClick: () => void;
};

// Buy Button
const BuyButton: React.FC<BuyButtonProps> = ({ text, onClick }) => (
	<button
		className='bg-blue-700 text-white text-lg py-2 px-4 rounded-lg w-full hover:bg-blue-400'
		onClick={onClick}
		type='button'
	>
		{text}
	</button>
);

// Need Refactor
// Reausable Component Course Detail Content
type CourseDetailContentProps = {
	title: string;
	content?: string;
	children?: React.ReactNode;
	maxLength?: number;
};

const CourseDetailContent: React.FC<CourseDetailContentProps> = ({
	title,
	content,
	children,
	maxLength = 250,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const shouldTruncateContent = content && content.length > maxLength;

	const toggleExpanded = () => setIsExpanded(!isExpanded);

	const displayedContent =
		shouldTruncateContent && !isExpanded
			? `${content.slice(0, maxLength)}...`
			: content;

	return (
		<div className='grid gap-2'>
			<h3 className='font-bold text-xl'>{title}</h3>
			{displayedContent && (
				<p
					dangerouslySetInnerHTML={{ __html: displayedContent }}
					className='text-gray-700'
				/>
			)}
			{shouldTruncateContent && (
				<button
					className={`flex font-bold text-sm transition-all ${
						isExpanded
							? 'text-gray-600 justify-start'
							: 'text-blue-500 justify-end'
					}`}
					onClick={toggleExpanded}
				>
					{isExpanded ? 'Sembunyikan' : 'Baca selengkapnya'}
				</button>
			)}
			{children}

			<hr />
		</div>
	);
};

// Tab
type BuyCourseTabProps = {
	facilities: string;
	schedule: string;
	price: string;
	onBuy: () => void;
};

const BuyCourseTab: React.FC<BuyCourseTabProps> = ({
	facilities,
	schedule,
	price,
	onBuy,
}) => (
	<div className='grid gap-4'>
		<CourseDetailContent title='Apa yang Kamu Dapat' content={facilities} />
		<CourseDetailContent title='Jadwal' content={schedule} />
		<CourseDetailContent title='Harga' content={price} />
		<BuyButton text='Beli Kursus' onClick={onBuy} />
	</div>
);

type TermAndConditionTabProps = {
	tncs: string;
};

const TermAndConditionTab: React.FC<TermAndConditionTabProps> = ({ tncs }) => (
	<div className='grid gap-4'>
		<CourseDetailContent title='Syarat dan Ketentuan' content={tncs} />
	</div>
);

// Need Refactor
// Sticky Section Component
type StickySectionProps = {
	facilities: string;
	schedule: string;
	price: string;
	tncs: string;
	onBuy: () => void;
};

const StickySection: React.FC<StickySectionProps> = ({
	facilities,
	schedule,
	price,
	tncs,
	onBuy,
}) => {
	const [activeTab, setActiveTab] = useState<'buy' | 'tnc'>('buy');

	return (
		<div className='grid border rounded-xl px-6 py-6 gap-6 sticky top-24'>
			{/* Tab Navigation */}
			<div className='grid grid-cols-2 border-b'>
				<button
					className={`px-4 py-2 font-semibold ${
						activeTab === 'buy' ? 'border-b-2 border-blue-500' : ''
					}`}
					onClick={() => setActiveTab('buy')}
				>
					Beli Kursus
				</button>
				<button
					className={`px-4 py-2 font-semibold ${
						activeTab === 'tnc' ? 'border-b-2 border-blue-500' : ''
					}`}
					onClick={() => setActiveTab('tnc')}
				>
					S&K
				</button>
			</div>

			{/* Tab Content */}
			<div>
				{activeTab === 'buy' && (
					<BuyCourseTab
						facilities={facilities}
						schedule={schedule}
						price={price}
						onBuy={onBuy}
					/>
				)}
				{activeTab === 'tnc' && <TermAndConditionTab tncs={tncs} />}
			</div>
		</div>
	);
};

// Need Refactor
type ReviewSectionProps = {
	averageRating: number;
	totalReviews: number;
};

const ReviewSection: React.FC<ReviewSectionProps> = ({
	averageRating,
	totalReviews,
	// reviewList,
}) => (
	<div className='grid p-6 gap-4'>
		<h3 className='text-xl font-bold'>Ulasan</h3>
		<div className='rounded-lg border px-4 py-4'>
			<p className='text-4xl'>{averageRating}</p>
			<p className='text-gray-500'>{totalReviews} Ulasan</p>
		</div>
	</div>
);

type CourseDetailProps = {
	courseData: any;
	courseRating: any;
};

const CourseDetail: React.FC<CourseDetailProps> = ({
	courseData,
	courseRating,
}) => {
	return (
		<div className='container bg-white text-black mx-auto p-6'>
			{courseData && (
				<>
					<div className='grid grid-cols-3 gap-4'>
						<div className='col-span-2'>
							<div className='grid gap-6 p-6'>
								<div className='grid gap-2'>
									<p>{courseData.categoriesName}</p>
									<h2 className='text-2xl font-bold'>
										{courseData.courseName}
									</h2>
									<div className='flex gap-2'>
										<p className='text-yellow-500 font-semibold'>
											Rating: {courseData.rating}
										</p>

										<p className='text-gray-500 font-semibold'>
											({courseRating.totalReviewer}{' '}
											Ulasan)
										</p>
									</div>
								</div>
								<div className='w-full'>
									<Image
										src={courseData.icon.large}
										width={1000}
										height={200}
										alt='Course Image'
									/>
								</div>
								<div className='flex gap-4 border-b pb-2 items-center'>
									<div className='align-middle'>
										<Image
											src={
												courseData.partner.partnerLogo
													.square
											}
											alt='Partner Logo'
											width={50}
											height={50}
										/>
									</div>
									<div className='grid gap-2'>
										<h3 className='text-xl font-bold'>
											{courseData.partner.partnerName}
										</h3>
										<h4 className='text-sm font-bold text-gray-600'>
											{courseData.tutorName}
										</h4>
									</div>
								</div>
								<CourseDetailContent
									title='Tentang Kursus'
									content={
										courseData.courseDescription.aboutCourse
									}
								/>
								<CourseDetailContent
									title='Kurikulum'
									content={
										courseData.courseDescription.curriculum
									}
								/>
							</div>
							<ReviewSection
								averageRating={courseRating.avgRating}
								totalReviews={courseRating.totalReviewer}
							/>
						</div>
						<div>
							<StickySection
								facilities={
									courseData.courseDescription.facilities
								}
								schedule={courseData.courseDescription.schedule}
								price={courseData.finalPrice}
								tncs={
									courseData.courseDescription
										.termAndCondition
								}
								//
								onBuy={() => alert('Membeli kursus!')}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CourseDetail;
