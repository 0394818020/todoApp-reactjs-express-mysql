export default async (API, options) => {
    const res = await fetch(API, options);

    const data = await res.json();

    if (!res.ok)
        return { 
            ...data,
            ok : false
        }

    return {
        ...data,
        ok : true
    }

}