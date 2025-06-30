// import { Link } from "wouter";
// import { Home } from "lucide-react";

// export default function NotFound() {
//   return (
//     <div className="flex-1 flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
//         <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
//         <Link href="/">
//           <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
//             <Home className="h-4 w-4 mr-2" />
//             Back to Dashboard
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }
import { Link } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
<<<<<<< HEAD
    <div className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20 bg-gray-50">
      <div className="text-center max-w-md w-full">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-sm sm:text-base text-gray-500 mb-8">
          The page you're looking for doesn't exist.
=======
    <div className="flex-1 flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
        </p>
        <Link href="/">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer">
            <Home className="h-4 w-4 mr-2" />
            Back to Dashboard
          </div>
        </Link>
      </div>
    </div>
  );
}
