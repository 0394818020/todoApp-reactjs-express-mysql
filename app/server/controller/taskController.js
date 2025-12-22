import task from "../model/task.js";

export default {
    add : async (req, res) => {
        const {title} = req.body;

        if (!title)
            return res.status(400).json({ message : "Không được bỏ trống!"});

        try {
            await task.add(title);

            return res.status(200).json({ message : "Thêm thành công!"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ serverError : "Lỗi server"});
        }
    },

    delete : async (req, res) => {
        const { id } = req.params;

        try {
            await task.delete(id);

            res.status(200).json({ message : "xóa thành công!"});
        } catch (err) {
            console.log(err);
            res.status(500).json({ serverError : "Lỗi server"});
        }
    },

    getAll : async (req, res) => {

        try {
            const tasks = await task.getAll();

            res.status(200).json({ tasks });
        } catch (err) {
            console.log(err);
            res.status(500).json({ serverError : "Lỗi server"});
        }
    },

    update : async (req, res) => {
        const { id } = req.params;
        const { title } = req.body;

        if (!title)
            return res.status(401).json({ clientError : "Không được bỏ trống!"});

        try {
            await task.update(id, title);

            res.status(201).json({ message : "Sửa thành công!"});
        } catch (err) {
            console.log(err);
            res.status(500).json({ serverError : "Lỗi server"});
        }
    },

    finishTask : async (req, res) => {
        const { id } = req.params;

        try {
            await task.finishTask(id);

            res.status(200).json({ message : "Hoàn thành!"});
        } catch (err) {
            console.log(err);
            res.status(500).json({ serverError : "Lỗi server"});
        }
    }
}