import Note from "../models/Notes.models.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req,res){
  try {
    const {title,content} = req.body;
    const newNote = new Note({title,content});

    await newNote.save()
    res.status(201).json({message:"Note created successfully"});
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
