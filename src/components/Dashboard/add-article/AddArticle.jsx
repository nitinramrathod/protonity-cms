import Input from "@/components/common/Input";
import React from "react";
import { GroupHeading, InputGroup, Row } from "../form-components/common";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";

const AddArticle = () => {
  return (
    <InputGroup>
      <GroupHeading>Basic Fields</GroupHeading>
      <Row>
        <Input label="Title" className="light-input" />
        <Input label="Author" className="light-input" />
        <Input type="date" label="Publish Date" className="light-input" />
     
        <Input label="Category" className="light-input" />
        <Input label="Tags" className="light-input" />
        <Input label="Meta Keywords" className="light-input" />
      </Row>
      <Row className="col-1">
        <Textarea className="light-input" label="Short Description" rows="3"></Textarea>
      </Row>
      <Row className="col-1">
        <Textarea className="light-input" label="Long Description" rows="6"></Textarea>
      </Row>
      <Row className="">
        <Button className="light-input" label="Long Description" rows="6">
            Save
        </Button>
      </Row>
    </InputGroup>
  );
};

export default AddArticle;
