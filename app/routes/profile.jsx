//--------------------------------------------------------------------
// routes/profile.jsx
import { Form, useActionData } from "react-router";

// --- Client Action (runs in browser)
export async function clientAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const pass = formData.get("pass");

  // Save to localStorage
  const user = { name, email, pass };
  localStorage.setItem("user", JSON.stringify(user));

  return user; // make it available via useActionData
}

export default function Profile() {
  const data = useActionData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Form</h1>
      <Form method="post" className="flex flex-col gap-3 max-w-sm">
        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        <input type="email" name="email" placeholder="Email" className="input input-bordered" />
        <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>

      {data && (
        <p className="mt-4 text-green-600">
          ✅ User saved: {data.name} ({data.email})
        </p>
      )}
    </div>
  );
}
//---------------------------------------------------------
// import { Form, redirect } from "react-router";

// // ✅ this runs only on the SERVER
// export async function serverAction({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");

//   // here you might save to DB, send email, etc.
//   console.log("SERVER ACTION received:", name);

//   // after action, redirect
//   return redirect("/thank-you");
// }

// // ✅ this runs only on the CLIENT (browser)
// export async function clientAction({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");

//   alert("CLIENT ACTION got email: " + email);
//   return null; // no redirect
// }

// export default function Contact() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

//       {/* 👉 handled by serverAction */}
//       <Form method="post" action="/contact?_action=serverAction">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           className="input input-bordered mb-2"
//         />
//         <button type="submit" className="btn btn-primary">
//           Submit (Server)
//         </button>
//       </Form>

//       <hr className="my-6" />

//       {/* 👉 handled by clientAction */}
//       <Form method="post" action="/contact?_action=clientAction">
//         <input
//           type="email"
//           name="email"
//           placeholder="Your email"
//           className="input input-bordered mb-2"
//         />
//         <button type="submit" className="btn btn-secondary">
//           Submit (Client)
//         </button>
//       </Form>
//     </div>
//   );
// }
//--------------------------------------------------------------------------

// // routes/contact.jsx
// import { Form, redirect } from "react-router";

// // --- server handler
// async function serverActionHandler(formData) {
//   const name = formData.get("name");
//   console.log("SERVER ACTION received:", name);
//   return redirect("/thank-you");
// }

// // --- client handler
// async function clientActionHandler(formData) {
//   const email = formData.get("email");
//   alert("CLIENT ACTION got email: " + email);
//   console.log(email)
//   return null;
// }

// // --- single dispatcher
// export async function action({ request }) {
//   const url = new URL(request.url);
//   const which = url.searchParams.get("_action"); // check which form
//   const formData = await request.formData();

//   if (which === "serverAction") return serverActionHandler(formData);
//   if (which === "clientAction") return clientActionHandler(formData);

//   throw new Error("Unknown action");
// }

// // --- component
// export default function Contact() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

//       <Form method="post" action="/contact?_action=serverAction">
//         <input type="text" name="name" placeholder="Your name" className="input input-bordered mb-2" />
//         <button type="submit" className="btn btn-primary">Submit (Server)</button>
//       </Form>

//       <hr className="my-6" />

//       <Form method="post" action="/contact?_action=clientAction">
//         <input type="email" name="email" placeholder="Your email" className="input input-bordered mb-2" />
//         <button type="submit" className="btn btn-secondary">Submit (Client)</button>
//       </Form>
//     </div>
//   );
// }
//---------------------------------------------------------
// routes/profile.jsx
// import { Form, redirect, useActionData } from "react-router";

// // --- Client Action (runs in browser)
// export async function clientAction({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const pass = formData.get("pass");

//   // Save to localStorage
//   const user = { name, email, pass };
//   localStorage.setItem("user", JSON.stringify(user));

//   return user; // make it available via useActionData
// }

// export async function serverAction({request}) {
//     const data = useActionData()
//     return redirect('/tanks',{data})
// }

// export default function Profile() {
//   const data = useActionData();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>
//       <Form method="post" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </Form>

//       {data && (
//         <p className="mt-4 text-green-600">
//           ✅ User saved: {data.name} ({data.email})
//         </p>
//       )}
//     </div>
//   );
// }


//--------------------------------------------------

// routes/profile.jsx
// import { Form, redirect, useActionData } from "react-router";

// // ✅ Client action: runs in the browser
// export async function clientAction({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const pass = formData.get("pass");

//   // Save to localStorage
//   const user = { name, email, pass };
//   localStorage.setItem("user", JSON.stringify(user));

//   return user; // available via useActionData
// }

// // ✅ Server action: runs on server, redirects
// export async function serverAction({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const pass = formData.get("pass");

//   // Here you would save to DB if needed

//   // Redirect to /thanks
// const user = { name, email, pass };

//   // Save to localStorage (for demo, optional)
//   // ❗ localStorage is only available in browser, so normally you would save on server
//   // For demo: we redirect with query params
//   const params = new URLSearchParams(user);
//   return redirect("/thanks?" + params.toString());
// }

// export default function Profile() {
//   const clientData = useActionData();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>

//       {/* Form triggers clientAction */}
//       <Form method="post" action="/profile?_action=clientAction" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Save Locally</button>
//       </Form>

//       {/* Form triggers serverAction */}
//       <Form method="post" action="/profile?_action=serverAction" className="flex flex-col gap-3 max-w-sm mt-4">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-secondary">Submit & Redirect</button>
//       </Form>

//       {clientData && (
//         <p className="mt-4 text-green-600">
//           ✅ User saved locally: {clientData.name} ({clientData.email})
//         </p>
//       )}
//     </div>
//   );
// }

//-------------------------------------------------------------
// routes/profile.jsx
// import { Form, redirect, useActionData } from "react-router";

// // ✅ Client action: runs in the browser
// export async function action({ request }) {
//   const url = new URL(request.url);
//   const which = url.searchParams.get("_action"); // identifies which form
//   const formData = await request.formData();

//   if (which === "clientAction") {
//     const user = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       pass: formData.get("pass"),
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//     return user; // available via useActionData
//   }

//   if (which === "serverAction") {
//     // server-side redirect
//     return redirect("/tanks");
//   }

//   throw new Error("Unknown action");
// }


// export default function Profile() {
//   const clientData = useActionData();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>

//       {/* Form triggers clientAction */}
//       <Form method="post" action="/profile?_action=clientAction" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Save Locally</button>
//       </Form>

//       {/* Form triggers serverAction */}
//       <Form method="post" action="/profile?_action=serverAction" className="flex flex-col gap-3 max-w-sm mt-4">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-secondary">Submit & Redirect</button>
//       </Form>

//       {clientData && (
//         <p className="mt-4 text-green-600">
//           ✅ User saved locally: {clientData.name} ({clientData.email})
//         </p>
//       )}
//     </div>
//   );
// }
//-------------------------------------------------------------

// import { Form, redirect, useActionData } from "react-router";

// // Single action dispatcher
// export async function action({ request }) {
//   const url = new URL(request.url);
//   const which = url.searchParams.get("_action"); 
//   const formData = await request.formData();

//   if (which === "clientAction") {
//     const user = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       pass: formData.get("pass"),
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//     return user;
//   }

//   if (which === "serverAction") {
//     const user = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       pass: formData.get("pass"),
//     };
//     const params = new URLSearchParams(user);
//     return redirect("/tanks?" + params.toString());
//   }

//   throw new Error("Unknown action");
// }

// export default function Profile() {
//   const clientData = useActionData();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>

//       {/* Client-side save */}
//       <Form method="post" action="/profile?_action=clientAction" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Save Locally</button>
//       </Form>

//       {/* Server-side submit & redirect */}
//       <Form method="post" action="/profile?_action=serverAction" className="flex flex-col gap-3 max-w-sm mt-4">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-secondary">Submit & Redirect</button>
//       </Form>

//       {clientData && (
//         <p className="mt-4 text-green-600">
//           ✅ User saved locally: {clientData.name} ({clientData.email})
//         </p>
//       )}
//     </div>
//   );
// }
// // routes/profile.jsx
// import { Form, redirect } from "react-router";

// // --- Server Action: runs when form is submitted
// export async function action({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const pass = formData.get("pass");


//    // pretend we save the user (e.g., to DB)
//   console.log("New user:", { name, email, pass });

//   // Save to localStorage (on client side)
//   // ⛔ BUT: server actions run on the server, not in browser.
//   // So we must pass it back, then save in browser (clientAction).
//   // For demo purposes, let's just return the data:
//   return { name, email, pass } , redirect ('/tanks');
// }

// // --- Component
// export default function Profile() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>
//       <Form method="post" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </Form>
//     </div>
//   );
// }
//-------------------------------------------------------------------

// // routes/profile.jsx
// import { Form, redirect } from "react-router";

// // --- Server Action (runs on server when form is submitted)
// export async function action({ request }) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const pass = formData.get("pass");

//   // pretend we save the user (e.g., to DB)
//   console.log("New user:", { name, email, pass });

//   // after saving, redirect to another page
//   return redirect("/thank-you");
// }

// // --- Component
// export default function Profile() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile Form</h1>
//       <Form method="post" className="flex flex-col gap-3 max-w-sm">
//         <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered" />
//         <input type="password" name="pass" placeholder="Password" className="input input-bordered" />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </Form>
//     </div>
//   );
// }
