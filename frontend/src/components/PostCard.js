import React from "react";

function PostCard({ post }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.image_url}
        alt={post.title}
        className="w-full h-60 object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
        <span className="inline-block bg-gray-800 text-xs px-2 py-1 rounded mb-2">
          {/* You can replace 'Health' with post.tag if you have it */}
          Blog
        </span>
        <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
        <p className="text-xs text-gray-300 mt-1">
          By {post.author} &nbsp;•&nbsp;
          {/* Add date field from DB if you have, else static */}
          July 10, 2025
        </p>
      </div>
    </div>
  );
}

export default PostCard;
// import React from "react";

// function PostCard({ post }) {
//   return (
//     <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
//       <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
//         <div className="relative">
//           <img
//             src={
//               post.image_url ||
//               "https://via.placeholder.com/400x240?text=No+Image"
//             }
//             alt={post.title}
//             className="w-full h-56 object-cover"
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
//             <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded mb-2">
//               {post.category || "Blog"}
//             </span>
//             <h3 className="text-lg font-semibold">
//               {post.title || "Untitled Post"}
//             </h3>
//             <p className="text-xs text-gray-300 mt-1">
//               by {post.author || "Unknown"} •{" "}
//               {post.date ? new Date(post.date).toLocaleDateString() : "No Date"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostCard;
