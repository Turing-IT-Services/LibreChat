/* eslint-disable max-len */
import { z } from 'zod';
import { EModelEndpoint } from './schemas';
import type { FileConfig, EndpointFileConfig } from './types/files';

export const supportsFiles = {
  [EModelEndpoint.openAI]: true,
  [EModelEndpoint.google]: true,
  [EModelEndpoint.assistants]: true,
  [EModelEndpoint.azureAssistants]: true,
  [EModelEndpoint.agents]: true,
  [EModelEndpoint.azureOpenAI]: true,
  [EModelEndpoint.anthropic]: true,
  [EModelEndpoint.custom]: true,
  [EModelEndpoint.bedrock]: true,
};

export const excelFileTypes = [
  'application/vnd.ms-excel',
  'application/msexcel',
  'application/x-msexcel',
  'application/x-ms-excel',
  'application/x-excel',
  'application/x-dos_ms_excel',
  'application/xls',
  'application/x-xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export const fullMimeTypesList = [
  'text/x-c',
  'text/x-c++',
  'application/csv',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/html',
  'text/x-java',
  'application/json',
  'text/markdown',
  'application/pdf',
  'text/x-php',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/x-python',
  'text/x-script.python',
  'text/x-ruby',
  'text/x-tex',
  'text/plain',
  'text/css',
  'text/vtt',
  'image/jpeg',
  'text/javascript',
  'image/gif',
  'image/png',
  'application/x-tar',
  'application/typescript',
  'application/xml',
  'application/zip',
  'image/svg',
  'image/svg+xml',
  ...excelFileTypes,
];

export const codeInterpreterMimeTypesList = [
  'text/x-c',
  'text/x-c++',
  'application/csv',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/html',
  'text/x-java',
  'application/json',
  'text/markdown',
  'application/pdf',
  'text/x-php',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/x-python',
  'text/x-script.python',
  'text/x-ruby',
  'text/x-tex',
  'text/plain',
  'text/css',
  'image/jpeg',
  'text/javascript',
  'image/gif',
  'image/png',
  'application/x-tar',
  'application/typescript',
  'application/xml',
  'application/zip',
  ...excelFileTypes,
];

export const retrievalMimeTypesList = [
  'text/x-c',
  'text/x-c++',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/html',
  'text/x-java',
  'application/json',
  'text/markdown',
  'application/pdf',
  'text/x-php',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/x-python',
  'text/x-script.python',
  'text/x-ruby',
  'text/x-tex',
  'text/plain',
];

export const imageExtRegex = /\.(jpg|jpeg|png|gif|webp)$/i;

export const excelMimeTypes =
  /^application\/(vnd\.ms-excel|msexcel|x-msexcel|x-ms-excel|x-excel|x-dos_ms_excel|xls|x-xls|vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)$/;

export const textMimeTypes =
  /^(text\/(x-c|x-csharp|x-c\+\+|x-java|html|markdown|x-php|x-python|x-script\.python|x-ruby|x-tex|plain|css|vtt|javascript|csv))$/;

export const applicationMimeTypes =
  /^(application\/(epub\+zip|csv|json|pdf|x-tar|typescript|vnd\.openxmlformats-officedocument\.(wordprocessingml\.document|presentationml\.presentation|spreadsheetml\.sheet)|xml|zip))$/;

export const imageMimeTypes = /^image\/(jpeg|gif|png|webp)$/;

export const supportedMimeTypes = [
  textMimeTypes,
  excelMimeTypes,
  applicationMimeTypes,
  imageMimeTypes,
  /** Supported by LC Code Interpreter PAI */
  /^image\/(svg|svg\+xml)$/,
];

export const codeInterpreterMimeTypes = [
  textMimeTypes,
  excelMimeTypes,
  applicationMimeTypes,
  imageMimeTypes,
];

export const codeTypeMapping: { [key: string]: string } = {
  // Already included
  c: 'text/x-c',
  cs: 'text/x-csharp',
  cpp: 'text/x-c++',
  md: 'text/markdown',
  php: 'text/x-php',
  py: 'text/x-python',
  rb: 'text/x-ruby',
  tex: 'text/x-tex',
  js: 'text/javascript',
  sh: 'application/x-sh',
  ts: 'application/typescript',
  tar: 'application/x-tar',
  zip: 'application/zip',
  yml: 'application/x-yaml',
  yaml: 'application/x-yaml',
  log: 'text/plain',
  swift: 'text/swift',
  
  // Additional programming languages
  java: 'text/x-java',
  go: 'text/x-go',
  rs: 'text/x-rust',
  kt: 'text/x-kotlin',
  scala: 'text/x-scala',
  jsx: 'text/jsx',
  tsx: 'text/tsx',
  html: 'text/html',
  htm: 'text/html',
  css: 'text/css',
  sql: 'text/x-sql',
  r: 'text/x-r',
  dart: 'text/x-dart',
  pl: 'text/x-perl',
  lua: 'text/x-lua',
  hs: 'text/x-haskell',
  m: 'text/x-matlab',
  jl: 'text/x-julia',
  clj: 'text/x-clojure',
  groovy: 'text/x-groovy',
  ps1: 'text/x-powershell',
  bash: 'text/x-bash',
  asm: 'text/x-asm',
  f: 'text/x-fortran',
  f90: 'text/x-fortran',
  cob: 'text/x-cobol',
  cbl: 'text/x-cobol',
  erl: 'text/x-erlang',
  ex: 'text/x-elixir',
  exs: 'text/x-elixir',
  
  // Configuration/Data files
  json: 'application/json',
  xml: 'application/xml',
  csv: 'text/csv',
  ini: 'text/plain',
  toml: 'text/plain',
  properties: 'text/plain',
  dockerfile: 'text/plain',
  gitignore: 'text/plain',
  env: 'text/plain',
  
  // Documentation
  rst: 'text/x-rst',
  adoc: 'text/asciidoc',
  
  // Additional common formats
  txt: 'text/plain',
  diff: 'text/x-diff',
  patch: 'text/x-patch',
  svg: 'image/svg+xml',
  graphql: 'text/x-graphql',
  vue: 'text/x-vue',
  ipynb: 'application/x-ipynb+json',
  bat: 'text/plain',
  conf: 'text/plain',
  pug: 'text/x-pug',
  sass: 'text/x-sass',
  scss: 'text/x-scss',
  less: 'text/x-less',
  proto: 'text/x-protobuf',
  gradle: 'text/x-gradle',
  pom: 'application/xml',
  h: 'text/x-c',
  hpp: 'text/x-c++',
  hxx: 'text/x-c++',
  cc: 'text/x-c++',
  cxx: 'text/x-c++'
};

export const retrievalMimeTypes = [
  /^(text\/(x-c|x-c\+\+|html|x-java|markdown|x-php|x-python|x-script\.python|x-ruby|x-tex|plain|vtt|xml))$/,
  /^(application\/(json|pdf|vnd\.openxmlformats-officedocument\.(wordprocessingml\.document|presentationml\.presentation)))$/,
];

export const megabyte = 1024 * 1024;
/** Helper function to get megabytes value */
export const mbToBytes = (mb: number): number => mb * megabyte;

const defaultSizeLimit = mbToBytes(512);
const assistantsFileConfig = {
  fileLimit: 10,
  fileSizeLimit: defaultSizeLimit,
  totalSizeLimit: defaultSizeLimit,
  supportedMimeTypes,
  disabled: false,
};

export const fileConfig = {
  endpoints: {
    [EModelEndpoint.assistants]: assistantsFileConfig,
    [EModelEndpoint.azureAssistants]: assistantsFileConfig,
    [EModelEndpoint.agents]: assistantsFileConfig,
    default: {
      fileLimit: 10,
      fileSizeLimit: defaultSizeLimit,
      totalSizeLimit: defaultSizeLimit,
      supportedMimeTypes,
      disabled: false,
    },
  },
  serverFileSizeLimit: defaultSizeLimit,
  avatarSizeLimit: mbToBytes(2),
  checkType: function (fileType: string, supportedTypes: RegExp[] = supportedMimeTypes) {
    return supportedTypes.some((regex) => regex.test(fileType));
  },
};

const supportedMimeTypesSchema = z
  .array(z.any())
  .optional()
  .refine(
    (mimeTypes) => {
      if (!mimeTypes) {
        return true;
      }
      return mimeTypes.every(
        (mimeType) => mimeType instanceof RegExp || typeof mimeType === 'string',
      );
    },
    {
      message: 'Each mimeType must be a string or a RegExp object.',
    },
  );

export const endpointFileConfigSchema = z.object({
  disabled: z.boolean().optional(),
  fileLimit: z.number().min(0).optional(),
  fileSizeLimit: z.number().min(0).optional(),
  totalSizeLimit: z.number().min(0).optional(),
  supportedMimeTypes: supportedMimeTypesSchema.optional(),
});

export const fileConfigSchema = z.object({
  endpoints: z.record(endpointFileConfigSchema).optional(),
  serverFileSizeLimit: z.number().min(0).optional(),
  avatarSizeLimit: z.number().min(0).optional(),
});

/** Helper function to safely convert string patterns to RegExp objects */
export const convertStringsToRegex = (patterns: string[]): RegExp[] =>
  patterns.reduce((acc: RegExp[], pattern) => {
    try {
      const regex = new RegExp(pattern);
      acc.push(regex);
    } catch (error) {
      console.error(`Invalid regex pattern "${pattern}" skipped.`);
    }
    return acc;
  }, []);

export function mergeFileConfig(dynamic: z.infer<typeof fileConfigSchema> | undefined): FileConfig {
  const mergedConfig = fileConfig as FileConfig;
  if (!dynamic) {
    return mergedConfig;
  }

  if (dynamic.serverFileSizeLimit !== undefined) {
    mergedConfig.serverFileSizeLimit = mbToBytes(dynamic.serverFileSizeLimit);
  }

  if (dynamic.avatarSizeLimit !== undefined) {
    mergedConfig.avatarSizeLimit = mbToBytes(dynamic.avatarSizeLimit);
  }

  if (!dynamic.endpoints) {
    return mergedConfig;
  }

  for (const key in dynamic.endpoints) {
    const dynamicEndpoint = (dynamic.endpoints as Record<string, EndpointFileConfig>)[key];

    if (!mergedConfig.endpoints[key]) {
      mergedConfig.endpoints[key] = {};
    }

    const mergedEndpoint = mergedConfig.endpoints[key];

    if (dynamicEndpoint.disabled === true) {
      mergedEndpoint.disabled = true;
      mergedEndpoint.fileLimit = 0;
      mergedEndpoint.fileSizeLimit = 0;
      mergedEndpoint.totalSizeLimit = 0;
      mergedEndpoint.supportedMimeTypes = [];
      continue;
    }

    if (dynamicEndpoint.fileSizeLimit !== undefined) {
      mergedEndpoint.fileSizeLimit = mbToBytes(dynamicEndpoint.fileSizeLimit);
    }

    if (dynamicEndpoint.totalSizeLimit !== undefined) {
      mergedEndpoint.totalSizeLimit = mbToBytes(dynamicEndpoint.totalSizeLimit);
    }

    const configKeys = ['fileLimit'] as const;
    configKeys.forEach((field) => {
      if (dynamicEndpoint[field] !== undefined) {
        mergedEndpoint[field] = dynamicEndpoint[field];
      }
    });

    if (dynamicEndpoint.supportedMimeTypes) {
      mergedEndpoint.supportedMimeTypes = convertStringsToRegex(
        dynamicEndpoint.supportedMimeTypes as unknown as string[],
      );
    }
  }

  return mergedConfig;
}
