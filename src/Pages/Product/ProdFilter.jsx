import {
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

const FilterSection = ({ heading, options, value, onChange }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box
          as="span"
          flex="1"
          textAlign="left"
          fontWeight="500"
          color="gray.500"
        >
          <Text
            fontWeight="bold"
            mb="3px"
            color="gray.600"
            fontSize="15px"
          >
            {heading}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.500" p="2">
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="column" gap="2">
          {options.map((item, i) => (
            <Radio value={item.title} key={i}>
              {item.name || item.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </AccordionPanel>
  </AccordionItem>
);

const ProdFilter = ({
  genderOptions,
  genderValue,
  onGenderChange,
  productTypeOptions,
  productTypeValue,
  onProductTypeChange,
  frameColorOptions,
  frameColorValue,
  onFrameColorChange,
  lensOptions,
  lensValue,
  onLensChange,
  materialOptions,
  materialValue,
  onMaterialChange
}) => {
  return (
    <Box mt="-1%">
      <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
        <FilterSection
          heading="Gender"
          options={genderOptions}
          value={genderValue}
          onChange={onGenderChange}
        />
        <FilterSection
          heading="Product Type"
          options={productTypeOptions}
          value={productTypeValue}
          onChange={onProductTypeChange}
        />
        <FilterSection
          heading="Frame Color"
          options={frameColorOptions}
          value={frameColorValue}
          onChange={onFrameColorChange}
        />
        <FilterSection
          heading="Lens Type"
          options={lensOptions}
          value={lensValue}
          onChange={onLensChange}
        />
        <FilterSection
          heading="Material"
          options={materialOptions}
          value={materialValue}
          onChange={onMaterialChange}
        />
      </Accordion>
    </Box>
  );
};

export default ProdFilter;
