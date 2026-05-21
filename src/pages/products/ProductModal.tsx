import {
  Modal,
  Input,
  Button,
  Row,
  Col,
  Switch,
  Upload,
  Select,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ProductModal = ({ open, onClose }: Props) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={false}
      width={1000}
      centered
      title={
        <h2 className="text-[22px] font-semibold">
          Qo'shish
        </h2>
      }
    >
      <Row gutter={[20, 20]}>
        {/* LEFT */}
        <Col span={12}>
          <div className="flex flex-col gap-4">
            <Input
              size="large"
              placeholder="Tovar nomi"
            />

            <Input
              size="large"
              placeholder="Narxi"
            />

            <Input
              size="large"
              placeholder="Chegirma narxi"
            />

            <Input
              size="large"
              placeholder="Yuklama"
            />

            <Input
              size="large"
              placeholder="Razmeri"
            />

            <Select
              size="large"
              placeholder="Kategoriya"
              options={[
                {
                  value: "model-c",
                  label: "Model C",
                },
              ]}
            />

            <Upload>
              <Button
                size="large"
                icon={<UploadOutlined />}
                block
              >
                Rasm yuklash
              </Button>
            </Upload>
          </div>
        </Col>

        <Col span={12}>
          <div className="flex flex-col gap-4">
            <Input.TextArea
              rows={8}
              placeholder="Ma'lumot"
            />

            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
              <span className="font-medium">
                Active
              </span>

              <Switch />
            </div>

            <Button
              type="primary"
              size="large"
              className="w-full"
            >
              Qo'shish
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ProductModal;