// import { useSearchParams } from "react-router";

// export default function Thanks() {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name");
//   const email = searchParams.get("email");

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
//       <p>Your data:</p>
//       <p>{name} ({email})</p>
//     </div>
//   );
// }


// // routes/thanks.jsx
// import { useEffect, useState } from "react";

// export default function Thanks() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) setUser(savedUser);
//   }, []);

//   if (!user) {
//     return (
//       <div className="p-6 text-center">
//         <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
//         <p>No user data found in localStorage.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
//       <p className="text-lg">Your data has been saved:</p>
//       <p className="mt-2 font-medium">
//         Name: {user.name} <br />
//         Email: {user.email}
//       </p>
//     </div>
//   );
// }


// import { useSearchParams } from "react-router";

// export default function Tanks() {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name");
//   const email = searchParams.get("email");

//   return (
//     <div>
//       <h1>Tanks Page</h1>
//       {name && email && <p>Submitted: {name} ({email})</p>}
//     </div>
//   );
// }


import { useSearchParams } from "react-router";

export default function Tanks() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tanks Page</h1>
      {name && email ? (
        <p>Submitted: {name} ({email})</p>
      ) : (
        <p>No user data received.</p>
      )}
    </div>
  );
}
