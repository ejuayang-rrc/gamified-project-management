import { useState } from "react";
import DashboardWidgetCard from "../common/DashboardWidgetCard";

type CreateTaskWidgetProps = {
  addTask: (title: string, description: string) => void;
};

const CreateTaskWidget = ({ addTask }: CreateTaskWidgetProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <DashboardWidgetCard widgetTitle="Add Task">
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (!title.trim() || !description.trim()) {
                    return;
                }

                addTask(title, description);
                setTitle("");
                setDescription("");
                }}
            className="flex gap-2
            ">
            <div className="flex flex-col gap-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task title"
                    className="
                        flex-1
                        h-9
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        px-3
                "/>

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="
                        h-9
                        rounded-md
                        border 
                        border-white/10
                        bg-white/5
                        px-3
                "/>
            </div>

            <button
                type="submit"
                className="
                    h-9
                    px-3
                    rounded-md
                    border
                    border-white/10
                    bg-white/10
                ">
                Add
            </button>
        </form>
    </DashboardWidgetCard>
    );
};

export default CreateTaskWidget;
