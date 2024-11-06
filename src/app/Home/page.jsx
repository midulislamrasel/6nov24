export const User = () => {
    const formHandesUser = async (formData) => {
        "use server";

        const name = formData.get("name");
        const email = formData.get("email");

        const data = await prisma.User.create({
            data: {
                name,
                email,
            },
        });

        console.log(data);
    };

    return (
        <>
            <div className="text-3">
                <form
                    action={formHandesUser}
                    className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
            );
        </>
    )
}
