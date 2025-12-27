import task from "../model/task.js";

export default {
    add : async (req, res) => {
        const {title} = req.body;

        if (!title)
            return res.status(400).json({ message : "Không được bỏ trống!"});

        try {
            const newTask = await task.add(title);

            return res.status(200).json({ message : "Thêm thành công!", newTask});
        } catch (err) {

            if (err.name = 'ER_DATA_TOO_LONG')
                return res.status(500).json({ serverError : "Không vượt quá 255 kí tự!"};)

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

            res.status(200).json({ tasks: Array.isArray(tasks) ? tasks : [] });
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
            const newTask = await task.update(id, title);

            res.status(201).json({ message : "Sửa thành công!", newTask});
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