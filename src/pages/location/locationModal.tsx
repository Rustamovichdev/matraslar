import { Button, Form, Input, Modal, Switch, Upload, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FC } from "react";

interface PropsLocationModal {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const LocationModal: FC<PropsLocationModal> = ({ open, setOpen }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
        // Bu yerda form ma'lumotlarini saqlash logikasi bo'ladi
        setOpen(false);
        form.resetFields();
    };

    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
    };

    type FieldType = {
        address?: string;
        locationUrl?: string;
        description?: string;
        status?: boolean;
    };

    return (
        <Modal
            title={null}
            open={open}
            onCancel={handleCancel}
            width={1000}
            centered
            footer={[
                <Button key='back' onClick={handleCancel}>
                    Bekor qilish
                </Button>,
                <Button
                    key='submit'
                    type='primary'
                    onClick={() => form.submit()}
                >
                    Saqlash
                </Button>,
            ]}
        >
            <Form
                form={form}
                name='location_form'
                onFinish={onFinish}
                layout='vertical'
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginBottom: 20,
                    }}
                >
                    <Typography.Title level={4} style={{ margin: 0 }}>
                        TAHRIRLASH
                    </Typography.Title>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "flex-start",
                    }}
                >
                    {/* Image Upload Section (Eng chapda) */}
                    <div style={{ width: "200px", height: "250px"}}>
                        <Form.Item label='Rasmlar'>
                            <Upload
                                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                listType='picture-card'
                                multiple
                                maxCount={3}
                                
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: 250,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <UploadOutlined style={{ fontSize: 24 }} />
                                    <div style={{ marginTop: 8 }}>
                                        Yuklash (250x250)
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </div>

                    <div style={{ flex: 1 }}>
                        {/* Manzil va Location (O'rtada) */}
                        <Form.Item<FieldType>
                            label='Manzil'
                            name='address'
                            rules={[
                                {
                                    required: true,
                                    message: "Manzilni kiriting!",
                                },
                            ]}
                        >
                            <Input placeholder='Manzilni kiriting' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label='Location'
                            name='locationUrl'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Location URL/koordinatalarni kiriting!",
                                },
                            ]}
                        >
                            <Input placeholder='Location URL' />
                        </Form.Item>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginTop: 10,
                            }}
                        >
                            <Typography.Text>Holat</Typography.Text>
                            <Form.Item<FieldType>
                                name='status'
                                valuePropName='checked'
                                style={{ marginBottom: 0 }}
                            >
                                <Switch />
                            </Form.Item>
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        {/* TextArea (O'ng tarafda) */}
                        <Form.Item<FieldType> label='Matn' name='description'>
                            <Input.TextArea
                                rows={10}
                                placeholder="Matn kiritish (ro'parasi va h.k.)"
                            />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </Modal>
    );
};

export default LocationModal;
