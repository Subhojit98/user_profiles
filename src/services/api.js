const getUsersData = async () => {

    const endPoint = `https://randomuser.me/api/?results=${10}`

    try {
        const data = await fetch(endPoint)
        if (data.ok) {
            return await data.json()
        }

        else {
            console.log("Error while fetching the user data!!.", data.status)
        }
    } catch (error) {
        console.log(error.message || error)
    }
}

export { getUsersData }