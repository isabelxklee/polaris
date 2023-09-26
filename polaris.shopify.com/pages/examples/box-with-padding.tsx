import React from 'react';
import {BlockStack, Box, Text, InlineStack} from '@shopify/polaris';

import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function BoxWithPaddingExample() {
  return (
    <BlockStack gap="4">
      <div
        style={{
          backgroundColor: 'var(--p-color-bg-info-strong)',
          width: '586px',
        }}
      >
        <Box padding="400" width="586px">
          <Placeholder label="padding" childAlign="center" />
        </Box>
      </div>
      <InlineStack gap="4">
        <div style={{backgroundColor: 'var(--p-color-bg-info-strong)'}}>
          <Box paddingInlineStart="400" width="284px">
            <Placeholder label="paddingInlineStart" childAlign="start" />
          </Box>
        </div>
        <div style={{backgroundColor: 'var(--p-color-bg-info-strong)'}}>
          <Box paddingInlineEnd="400" width="284px">
            <Placeholder label="paddingInlineEnd" childAlign="end" />
          </Box>
        </div>
      </InlineStack>
      <InlineStack gap="4">
        <div style={{backgroundColor: 'var(--p-color-bg-info-strong)'}}>
          <Box paddingBlockStart="400" width="284px">
            <Placeholder label="paddingBlockStart" childAlign="center" />
          </Box>
        </div>
        <div style={{backgroundColor: 'var(--p-color-bg-info-strong)'}}>
          <Box paddingBlockEnd="400" width="284px">
            <Placeholder label="paddingBlockEnd" childAlign="center" />
          </Box>
        </div>
      </InlineStack>
    </BlockStack>
  );
}

const Placeholder = ({
  label = '',
  height = 'auto',
  width = 'auto',
  childAlign,
}: {
  label?: string;
  height?: string;
  width?: string;
  childAlign: 'start' | 'center' | 'end';
}) => {
  return (
    <div
      style={{
        background: 'var(--p-color-text-info)',
        height: height,
        width: width,
      }}
    >
      <InlineStack gap="4" align={childAlign}>
        <div
          style={{
            color: 'var(--p-color-text-on-color)',
          }}
        >
          <Text as="h2" variant="bodyMd" fontWeight="medium">
            {label}
          </Text>
        </div>
      </InlineStack>
    </div>
  );
};

export default withPolarisExample(BoxWithPaddingExample);
