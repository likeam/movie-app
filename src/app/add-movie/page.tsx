import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import * as actions from "@/actions";

const AddMovie = () => {
  return (
    <div className=" w-10/12 mx-auto p-10 bg-gray-400 rounded-md">
      <h1 className=" text-4xl font-bold mb-4">Add a New Movie</h1>
      <form action={actions.createMovie} className=" flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" required />

        <Label htmlFor="description">Description</Label>
        <textarea
          className=" w-full p-2 border rounded"
          name="description"
          required
        />

        <Label htmlFor="imageUrl">Image Url</Label>
        <Input type="text" name="imageUrl" required />

        <Button>Add Movie</Button>
      </form>
    </div>
  );
};

export default AddMovie;
