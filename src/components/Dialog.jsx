import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const DialogDemo = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="text-black shadow-blue-400 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue-500 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                Guardar
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-black m-0 text-[17px] font-medium">
                    Cargar datos
                </Dialog.Title>
                <Dialog.Description className="text-red-600 mt-[10px] mb-5 text-[15px] leading-normal">
                    ¿Esta seguro de cargar los datos? Esta acción no se puede deshacer.
                </Dialog.Description>
                <div className="mt-[25px] flex justify-end">
                    <Dialog.Close asChild>
                        <button className="bg-green-300 text-black inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                            Cargar datos.
                        </button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                    <button
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                    >
                        <Cross2Icon color='black' />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DialogDemo;