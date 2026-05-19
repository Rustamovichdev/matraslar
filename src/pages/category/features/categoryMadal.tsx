import type { FC } from "react";
import type { PropsCategoryMadal } from "../types";
import { Checkbox, Form, Input, Modal, Switch } from "antd";

const CategoryMadal: FC<PropsCategoryMadal> = ({ open, setOpen }) => {
    type FieldType = {
        title?: string;
        status?: boolean;
    };
    // function onFinish = () => {}
    return (
        <section>
            <Modal open={open} onCancel={() => setOpen(false)}>
                <h1>Qo’shish</h1>

                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    autoComplete='off'
                >
                    <Form.Item<FieldType>
                        label='Username'
                        name='title'
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label='Username'
                        name='status'
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </section>
    );
};
export default CategoryMadal;
