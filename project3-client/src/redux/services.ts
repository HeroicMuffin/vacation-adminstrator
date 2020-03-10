import tokenHandler from "../axios/tokenHandler";

export const getInitialData = async () => {
    try {
        let result = await tokenHandler.get("/GetData");
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
   return await tokenHandler.post("/admin/delete", payload)
};

export const updateCard = async (payload: any) => {
    return await tokenHandler.post("/admin/update", payload)
};
