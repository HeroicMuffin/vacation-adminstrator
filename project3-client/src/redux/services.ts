import tokenHandler from "../axios/tokenHandler";

export const getInitialData = async () => {
    try {
        let result = await tokenHandler.get("http://localhost:3200/GetData");
        const {table, myFollows} = result.data;
        result = table.map((e: any) => {
            e["checked"] = myFollows.includes(e.id);
            return e;
        });
        return result
    } catch (err) {
        console.log(err);

    }
};

export const deleteCard = async (payload: any) => {
   return await tokenHandler.post("http://localhost:3200/admin/delete", payload)
};

export const updateCard = async (payload: any) => {
    return await tokenHandler.post("http://localhost:3200/admin/update", payload)
};
