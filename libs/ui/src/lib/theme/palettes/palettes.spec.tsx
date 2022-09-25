import Ajv, { JSONSchemaType } from 'ajv';
import {
  ActionColorsType,
  BaseColorsType,
  BorderColorsType,
  BrandColorsType,
  DarkLightPaletteType,
  HoverColorsType,
  PaletteColorsType,
  PaletteType,
} from '../types/types';
import * as Palettes from '.';

const brandColorsSchema: JSONSchemaType<BrandColorsType> = {
  type: 'object',
  properties: {
    primary: { type: 'string' },
    secondary: { type: 'string' },
    tertiary: { type: 'string' },
    gradient: { type: 'string' },

    onPrimary: { type: 'string' },
    onSecondary: { type: 'string' },
    onTertiary: { type: 'string' },
    onGradient: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
};

const actionColorsSchema: JSONSchemaType<ActionColorsType> = {
  type: 'object',
  properties: {
    success: { type: 'string' },
    warning: { type: 'string' },
    error: { type: 'string' },
    onSuccess: { type: 'string' },
    onWarning: { type: 'string' },
    onError: { type: 'string' },
    successHover: { type: 'string' },
    warningHover: { type: 'string' },
    errorHover: { type: 'string' },
    onSucessHover: { type: 'string' },
    onErrorHover: { type: 'string' },
    onWarningHover: { type: 'string' },
    successPressed: { type: 'string' },
    warningPressed: { type: 'string' },
    errorPressed: { type: 'string' },
    onSuccessPressed: { type: 'string' },
    onWarningPressed: { type: 'string' },
    onErrorPressed: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
};

const baseColorsSchema: JSONSchemaType<BaseColorsType> = {
  type: 'object',
  properties: {
    backgroundPrimary: { type: 'string' },
    backgroundSecondary: { type: 'string' },
    surface: { type: 'string' },
    info: { type: 'string' },
    disabled: { type: 'string' },
    onBasePrimary: { type: 'string' },
    onBaseSecondary: { type: 'string' },
    onBaseTertiary: { type: 'string' },
    onBaseQuaternary: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
};

const borderColorsScheme: JSONSchemaType<BorderColorsType> = {
  type: 'object',
  properties: {
    borderPrimary: { type: 'string' },
    borderSecondary: { type: 'string' },
    borderTertiary: { type: 'string' },
    shadowPrimary: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
};

const hoverColorsSchema: JSONSchemaType<HoverColorsType> = {
  type: 'object',
  properties: {
    hoverSurfacePrimary: { type: 'string' },
    hoverSurfaceSecondary: { type: 'string' },
    hoverSurfaceTertiary: { type: 'string' },
    hoverBorder: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
};

const paletteColorsSchema: JSONSchemaType<PaletteColorsType> = {
  type: 'object',
  properties: {
    brand: brandColorsSchema,
    action: actionColorsSchema,
    base: baseColorsSchema,
    border: borderColorsScheme,
    hover: hoverColorsSchema,
  },
  required: ['brand', 'action', 'base', 'border', 'hover'],
  additionalProperties: false,
};

const PaletteSchema: JSONSchemaType<PaletteType> = {
  type: 'object',
  properties: {
    colors: paletteColorsSchema,
  },
  required: ['colors'],
  additionalProperties: false,
};

const schema: JSONSchemaType<DarkLightPaletteType> = {
  type: 'object',
  properties: {
    dark: PaletteSchema,
    light: PaletteSchema,
  },
  required: ['dark', 'light'],
  additionalProperties: true,
};

describe('Palette', () => {
  it('should plecrx palette be valid', () => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    validate(Palettes.plecrx);
    expect(validate.errors).toBe(null);
  });
});
