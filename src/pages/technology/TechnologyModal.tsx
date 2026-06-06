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
            width={700}
            centered
            title={
                <Typography.Title
                    level={4}
                    style={{ textAlign: "center", marginBottom: 20 }}
                >
                    TEXNOLOGIYA QO'SHISH
                </Typography.Title>
            }
        >
            <Form form={form} layout='vertical' onFinish={onFinish}>
                <Row gutter={24}>
                    {/* CHAP TARAF: 2 ta Input va Switch */}
                    <Col span={12}>
                        <Form.Item
                            label='Nomlari'
                            name='name'
                            rules={[{ required: true }]}
                        >
                            <Input size='large' placeholder='Nomini kiriting' />
                        </Form.Item>

                        <Form.Item label='Nomi' name='videoUrl'>
                            <Input
                                size='large'
                                placeholder='masalan:'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Holati'
                            name='isActive'
                            valuePropName='checked'
                        >
                            <Switch
                                checkedChildren='Aktiv'
                                unCheckedChildren='Noaktiv'
                            />
                        </Form.Item>
                    </Col>

                    {/* O'NG TARAF: 2 ta Input va Tugma */}
                    <Col span={12}>
                        <Form.Item label='Rasm' name='description'>
                            <Input
                                size='large'
                                placeholder=''
                            />
                        </Form.Item>

                        <Form.Item label="Video" name='extra'>
                            <Input
                                size='large'
                                placeholder=''
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
