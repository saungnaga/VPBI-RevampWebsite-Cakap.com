// components/CourseCard.tsx
interface CourseCardProps {
  title: string;
  provider: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  provider,
  price,
  rating,
  reviews,
  image,
}) => {
  const fallbackImage = "/placeholder.png"; // Use a placeholder image
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-44 shrink-0">
      <img
        src={image || fallbackImage}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4 bg-gray-200"
      />
      <div className="flex flex-col justify-end">
        <div>
          <h3 className="font-bold truncate">{title}</h3>
          <p className="text-gray-500 text-sm">By {provider}</p>
        </div>
        <div className="flex flex-col">
          <p className="px-2 border-2 rounded-full w-fit">Prakerja</p>
          <p className="font-bold text-black mt-2">Rp{price.toLocaleString()}</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-400">⭐ {rating}</span>
            <span className="text-gray-500 text-sm">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseCard;
