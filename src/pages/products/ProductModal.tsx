import {
    Modal,
    Form,
    Input,
    Button,
    Row,
    Col,
    Switch,
    Upload,
    Select,
    Typography,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";

interface Props {
    open: boolean;
    onClose: () => void;
}

const ProductModal = ({ open, onClose }: Props) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Mahsulot ma'lumotlari: ", values);
        onClose();
        form.resetFields();
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            width={1000}
            style={{ maxWidth: "95vw" }}
            centered
            title={<Typography.Title level={4}>QO'SHISH</Typography.Title>}
        >
            <Form form={form} layout='vertical' onFinish={onFinish}>
                <Row gutter={[20, 20]}>
                    {/* CHAP QISM: Rasm yuklash */}
                    <Col xs={24} md={12} lg={6}>
                        <Form.Item label='Rasm' name='image'>
                            <Upload
                                listType='picture-card'
                                showUploadList={false}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: 230,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <UploadOutlined style={{ fontSize: 24 }} />
                                    <div style={{ marginTop: 8 }}>
                                        Yuklash (230x230)
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12} lg={6}>
                        <Form.Item label='Kategoriya' name='category'>
                            <Select
                                size='large'
                                placeholder='Kategoriyani tanlang'
                            >
                                <Select.Option value='model-c'>
                                    Model C
                                </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label='Tovar nomi' name='name'>
                            <Input
                                size='large'
                                placeholder='Tovar nomini kiriting'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Narxi'
                            name='price'
                            normalize={(value) =>
                                value
                                    .replace(/[^0-9-]/g, "")
                                    .replace(/(?!^)-/g, "")
                            }
                        >
                            <Input
                                size='large'
                                placeholder='Narxini kiriting'
                            />
                        </Form.Item>

                        <Form.Item label='Yuklama' name='weight'>
                            <Input
                                size='large'
                                placeholder='Yuklamani kiriting'
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12} lg={6}>
                        <Form.Item
                            label='Razmeri'
                            name='size'
                            normalize={(value) => {
                                if (!value) return value;
                                const numbersOnly = value.replace(/\D/g, "");

                                const parts = [];
                                if (numbersOnly.length > 0) {
                                    parts.push(numbersOnly.substring(0, 3));
                                }
                                if (numbersOnly.length > 3) {
                                    parts.push(numbersOnly.substring(3, 6));
                                }
                                if (numbersOnly.length > 6) {
                                    parts.push(numbersOnly.substring(6, 8));
                                }
                                return parts.join(" x ");
                            }}
                        >
                            <Input
                                size='large'
                                placeholder='200 x 134 x 40'
                                maxLength={14}
                            />
                        </Form.Item>

                        <Form.Item label='Kafolat' name='warranty'>
                            <Input
                                size='large'
                                placeholder='Kafolat muddatini kiriting'
                            />
                        </Form.Item>

                        <Form.Item label='Yetkazib berish' name='delivery'>
                            <Input size='large' placeholder='Yetkazib berish' />
                        </Form.Item>

                        <Form.Item label='Brend' name='brand'>
                            <Input
                                size='large'
                                placeholder='Brendni kiriting'
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12} lg={6}>
                        <Form.Item label="Ma'lumot" name='description'>
                            <Input.TextArea
                                style={{
                                    width: "100%",
                                    height: 154,
                                    resize: "none",
                                }}
                                placeholder="Mahsulot haqida ma'lumot"
                            />
                        </Form.Item>

                        <div
                            className='flex flex-col gap-4 mt-2'
                            style={{ width: "100%" }}
                        >
                            <div
                                className='divvv'
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBlock: "30px",
                                }}
                            >
                                <span className='navinla'>Navinka</span>
                                <Form.Item
                                    name='isNew'
                                    valuePropName='checked'
                                    noStyle
                                >
                                    <Switch />
                                </Form.Item>
                            </div>
                            <div
                                className='divvv'
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span className='active'>Active</span>
                                <Form.Item
                                    name='isActive'
                                    valuePropName='checked'
                                    noStyle
                                >
                                    <Switch />
                                </Form.Item>
                            </div>

                            <Button
                                style={{
                                    width: "100%",
                                    height: 45,
                                    marginTop: "20px",
                                }}
                                type='primary'
                                className='mt-4'
                                onClick={() => form.submit()}
                            >
                                Qo'shish
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default ProductModal;
