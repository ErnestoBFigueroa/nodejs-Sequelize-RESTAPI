import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    // throw new Error("query failed");
    const projects = await Project.findAll();
    res.json(projects);
    //   res.send("getting project");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project)
      return res.status(404).json({ message: "Project does not exists" });

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    //   console.log(req.body);
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    //   console.log(id);
    //   console.log(req.body);
    //   res.send("updating project");
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    //   console.log(project);
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    //   console.log(req.params.id);
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    //   res.send("delete project");
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
