import { z } from 'zod';

export const MAX_DRAWING_BYTES = 10 * 1024 * 1024;
export const fieldLimits = { name: 100, company: 100, email: 255, phone: 40, toolType: 5000, industry: 100, material: 200, machine: 200, qty: 100, description: 2000, website: 200 } as const;
const optionalText = (max: number) => z.string().trim().max(max).refine(value => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value), 'Contains invalid characters.');
export const rfqSchema = z.object({
  name: optionalText(fieldLimits.name).pipe(z.string().min(1, 'Enter your full name.')),
  company: optionalText(fieldLimits.company).pipe(z.string().min(1, 'Enter your company name.')),
  email: optionalText(fieldLimits.email).pipe(z.email('Enter a valid email address.')),
  phone: optionalText(fieldLimits.phone).refine(value => !value || /^[+\d\s().-]+$/.test(value), 'Enter a valid phone number.'),
  toolType: optionalText(fieldLimits.toolType), industry: optionalText(fieldLimits.industry),
  material: optionalText(fieldLimits.material), machine: optionalText(fieldLimits.machine), qty: optionalText(fieldLimits.qty),
  description: optionalText(fieldLimits.description).pipe(z.string().min(1, 'Describe your application.')),
  website: optionalText(fieldLimits.website).pipe(z.string().max(0, 'Unable to submit this request.')),
});
export type RfqForm = z.infer<typeof rfqSchema>;
export type RfqPayload = RfqForm & { tools: string[]; drawing?: File };

export function validateDrawing(file?: Pick<File, 'name' | 'size' | 'type'>): string | undefined {
  if (!file) return;
  if (file.size > MAX_DRAWING_BYTES) return 'Drawing must be 10 MB or smaller.';
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !['pdf', 'dxf', 'dwg'].includes(extension)) return 'Choose a PDF, DXF or DWG file.';
  const mimeTypes: Record<string, string[]> = {
    pdf: ['application/pdf'],
    dxf: ['application/dxf', 'application/x-dxf', 'image/vnd.dxf', 'image/x-dxf', 'application/acad'],
    dwg: ['application/acad', 'application/x-acad', 'application/dwg', 'application/x-dwg', 'image/vnd.dwg', 'image/x-dwg'],
  };
  if (file.type && file.type !== 'application/octet-stream' && !mimeTypes[extension].includes(file.type)) return 'File type does not match the drawing format.';
}

export async function submitRfq(payload: RfqPayload): Promise<void> {
  rfqSchema.parse(payload);
  const fileError = validateDrawing(payload.drawing);
  if (fileError) throw new Error(fileError);
  throw new Error('Quote submission is not connected yet. Your request has not been sent. Please contact us by email or phone.');
}