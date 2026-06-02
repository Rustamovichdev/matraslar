import { Modal, Form, Input, Switch, Button, Row, Col, Typography } from "antd";
import type { FC } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const TechnologyModal: FC<Props> = ({ open, onClose }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Texnologiya ma'lumotlari: ", values);
        onClose();
        form.resetFields();
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            width={800}
            centered
            title={
                <Typography.Title level={4}>
                    TEXNOLOGIYA QO'SHISH
                </Typography.Title>
            }
        >
            <Form form={form} layout='vertical' onFinish={onFinish}>
                <Row gutter={24}>
                    {/* CHAP TARAF */}
                    <Col span={12}>
                        <Form.Item
                            label='Nomlari'
                            name='name'
                            rules={[{ required: true }]}
                        >
                            <Input size='large' placeholder='Nomini kiriting' />
                        </Form.Item>

                        <Form.Item label='Video URL' name='videoUrl'>
                            <Input
                                size='large'
                                placeholder='Video havolasini kiriting'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Holati'
                            name='isActive'
                            valuePropName='checked'
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <span>Aktiv</span>
                                <Switch />
                            </div>
                        </Form.Item>
                    </Col>

                    {/* O'NG TARAF */}
                    <Col span={12}>
                        <Form.Item label='Matn' name='description'>
                            <Input.TextArea
                                rows={4}
                                placeholder="Batafsil ma'lumot"
                                style={{ resize: "none" }}
                            />
                        </Form.Item>

                        <Form.Item label="Qo'shimcha ma'lumot" name='extra'>
                            <Input
                                size='large'
                                placeholder="Qo'shimcha kiriting"
                            />
                        </Form.Item>

                        <Button
                            type='primary'
                            htmlType='submit'
                            size='large'
                            block
                            style={{ marginTop: "20px" }}
                        >
                            Qo'shish
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default TechnologyModal;
