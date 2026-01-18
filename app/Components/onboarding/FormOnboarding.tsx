'use client';

import { useState } from 'react';
import { Button, Input } from '@heroui/react';
import {
  IconUser,
  IconMail,
  IconIdBadge2,
  IconShieldCheck,
  IconCircleCheck,
  IconAlertCircle,
} from '@tabler/icons-react';

interface FormData {
  nombre: string;
  documento: string;
  correo: string;
}

const OnboardingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    documento: '',
    correo: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [codigoSolicitud, setCodigoSolicitud] = useState('');

  // Simular reCAPTCHA
  const handleRecaptcha = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% de éxito

      if (isValid) {
        setRecaptchaToken('OK');
        setRecaptchaVerified(true);
        setErrors({ ...errors, recaptcha: '' });
      } else {
        setRecaptchaToken('FAIL');
        setRecaptchaVerified(false);
        setErrors({
          ...errors,
          recaptcha: 'Error de verificación reCAPTCHA. Intenta nuevamente.',
        });
      }
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    if (!formData.documento.trim()) {
      newErrors.documento = 'El documento es requerido';
    } else if (!/^\d{7,10}$/.test(formData.documento)) {
      newErrors.documento = 'Ingresa un documento válido (7-10 dígitos)';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo válido';
    }

    if (recaptchaToken !== 'OK') {
      newErrors.recaptcha = 'Debes verificar el reCAPTCHA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        const uuid = generateUUID();
        setCodigoSolicitud(uuid);
        setShowSuccess(true);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const resetForm = () => {
    setFormData({ nombre: '', documento: '', correo: '' });
    setRecaptchaToken('');
    setRecaptchaVerified(false);
    setErrors({});
    setShowSuccess(false);
    setCodigoSolicitud('');
  };

  if (showSuccess) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-8'>
          <div className='text-center'>
            <div className='mb-6'>
              <IconCircleCheck
                size={80}
                className='text-green-500 mx-auto'
                stroke={1.5}
              />
            </div>

            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              ¡Solicitud Exitosa!
            </h2>

            <p className='text-gray-600 dark:text-gray-400 mb-8'>
              Tu solicitud de apertura de cuenta ha sido registrada
              correctamente.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8'>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                Código de solicitud
              </p>
              <p className='text-2xl font-mono font-bold text-blue-600 dark:text-blue-400 break-all'>
                {codigoSolicitud}
              </p>
            </div>

            <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6'>
              <p className='text-sm text-amber-800 dark:text-amber-400'>
                <strong>Importante:</strong> Guarda este código para dar
                seguimiento a tu solicitud. Recibirás un correo electrónico con
                más información en las próximas 24 horas.
              </p>
            </div>

            <Button
              onClick={resetForm}
              color='primary'
              size='lg'
              radius='lg'
              className='w-full sm:w-auto'
            >
              Realizar otra solicitud
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
            Solicitud de Apertura de Cuenta
          </h2>

          <p>
            Al crear tu cuenta podrás acceder a herramientas diseñadas para
            facilitar tu experiencia, consultar información relevante y realizar
            trámites de forma más rápida y segura.
            <br />
            <br />
            Disfruta de un entorno confiable, atención en línea y acceso
            centralizado a tus datos, sin filas ni procesos innecesarios.
            <br />
            <br />
            Completa el formulario para iniciar tu proceso de registro
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-6 mt-6 pt-6 border-t border-slate-100'
        >
          <div>
            <Input
              label='Nombre completo'
              labelPlacement='outside'
              placeholder='Ej: Alexander Gonzalez'
              value={formData.nombre}
              onValueChange={(value) => handleInputChange('nombre', value)}
              startContent={
                <IconUser
                  size={20}
                  className='text-gray-400'
                />
              }
              radius='full'
              isInvalid={!!errors.nombre}
              errorMessage={errors.nombre}
              classNames={{
                label: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
              }}
            />
          </div>

          <div>
            <Input
              label='Número de documento'
              labelPlacement='outside'
              placeholder='Ej: 1032399835'
              value={formData.documento}
              onValueChange={(value) => handleInputChange('documento', value)}
              startContent={
                <IconIdBadge2
                  size={20}
                  className='text-gray-400'
                />
              }
              radius='full'
              isInvalid={!!errors.documento}
              errorMessage={errors.documento}
              classNames={{
                label: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
              }}
            />
          </div>

          <div>
            <Input
              label='Correo electrónico'
              labelPlacement='outside'
              placeholder='Ej: ejemplo@correo.com'
              type='email'
              value={formData.correo}
              onValueChange={(value) => handleInputChange('correo', value)}
              startContent={
                <IconMail
                  size={20}
                  className='text-gray-400'
                />
              }
              radius='full'
              isInvalid={!!errors.correo}
              errorMessage={errors.correo}
              classNames={{
                label: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
              }}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3'>
              Verificación de seguridad
            </label>

            <div
              className={`border-2 rounded-lg p-4 transition-all ${
                recaptchaVerified
                  ? 'border-green-300 bg-green-50 dark:bg-green-900/20'
                  : errors.recaptcha
                    ? 'border-red-300 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <input
                    type='checkbox'
                    checked={recaptchaVerified}
                    onChange={handleRecaptcha}
                    disabled={isSubmitting || recaptchaVerified}
                    className='w-6 h-6 cursor-pointer'
                  />
                  <span className='text-sm text-gray-700 dark:text-gray-300'>
                    No soy un robot
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  {isSubmitting && (
                    <div className='animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent'></div>
                  )}
                  {recaptchaVerified && (
                    <IconCircleCheck
                      size={24}
                      className='text-green-600'
                    />
                  )}
                  {!recaptchaVerified && !isSubmitting && (
                    <IconShieldCheck
                      size={24}
                      className='text-gray-400'
                    />
                  )}
                </div>
              </div>

              <input
                type='hidden'
                name='recaptcha_token'
                value={recaptchaToken}
              />
            </div>

            {errors.recaptcha && (
              <div className='flex items-center gap-2 mt-2 text-red-600 dark:text-red-400'>
                <IconAlertCircle size={16} />
                <p className='text-sm'>{errors.recaptcha}</p>
              </div>
            )}
          </div>

          <div className='pt-4'>
            <Button
              type='submit'
              color='primary'
              size='lg'
              radius='full'
              isLoading={isSubmitting}
              className='w-full font-semibold'
            >
              {isSubmitting ? 'Procesando...' : 'Enviar Solicitud'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
