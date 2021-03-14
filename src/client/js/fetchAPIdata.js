const apiData = async (Url, Data) => {
    const request = await fetch(Url, {
        method: "POST",
        credentials: 'same-origin',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        return { error: error };
    }
};

export default apiData
