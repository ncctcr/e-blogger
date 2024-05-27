import React, {FC, useRef} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {
    MenuButtonBold,
    MenuButtonItalic,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    RichTextEditor,
    type RichTextEditorRef,
} from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";
import {LOREM_IPSUM_BODY, LOREM_IPSUM_TITLE} from "@/constants";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
})

const INITIAL_VALUES = {
    title: LOREM_IPSUM_TITLE,
    body: LOREM_IPSUM_BODY
}

type TypeProps = {
    initialValues?: {title: string, body: string}
    onSubmit: (values: {title: string, body: string}) => void
}

const PostForm: FC<TypeProps> = ({initialValues = INITIAL_VALUES, onSubmit}) => {
    const rteRef = useRef<RichTextEditorRef>(null);

    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched
    } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const body = rteRef.current?.editor?.getHTML()
            onSubmit({
                title: values.title,
                body: body ? body : ''
            })
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <Box display='flex' flexDirection='column'>
                <Box mb={2}>
                    <TextField
                        id='title'
                        name='title'
                        label='Title'
                        value={values.title}
                        onChange={handleChange}
                        helperText={!!errors.title && !!touched.title && errors.title}
                        error={!!errors.title && !!touched.title}
                        fullWidth
                    />
                </Box>
                <Box mb={2}>
                    <RichTextEditor
                        ref={rteRef}
                        extensions={[StarterKit]} // Or any Tiptap extensions you wish!
                        content={initialValues.body} // Initial content for the editor
                        // Optionally include `renderControls` for a menu-bar atop the editor:
                        renderControls={() => (
                            <MenuControlsContainer>
                                <MenuSelectHeading />
                                <MenuDivider />
                                <MenuButtonBold />
                                <MenuButtonItalic />
                                {/* Add more controls of your choosing here */}
                            </MenuControlsContainer>
                        )}
                    />
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Button type='submit' variant='contained'>Save</Button>
            </Box>
        </form>
    );
};

export default PostForm;