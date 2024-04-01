import { TaskList } from "../../Components/TaskList";
import { TemplatePageAutheticated } from "../../Components/Template/TemplatePageAuthenticated";

export const TaskListPage = () => {
  return (
    <>
      <TemplatePageAutheticated>
        <TaskList />
      </TemplatePageAutheticated>
    </>
  );
};
