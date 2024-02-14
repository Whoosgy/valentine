/*
Judul Project : Main Yuk!
Deskripsi : Main Yuk! adalah sebuah permainan seberapa sayang pacar kita. Main Yuk!
            dibuat dengan menggunakan Jquery.
Pembuat : Muhammad Surya Jayadiprana
Disclaimer : Tolong jangan hapus bagian ini, karena menandakan anda mengsupport
            developer lokal. Terima kasih
*/

// Dialog
$(document).on('click', '#tombolPopup', function (e) {
    e.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Hi my chibi :3',
        text: 'i have some question for u baby',
        showClass: {
            popup: 'animate__animated animate__tada'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(() => {
        Swal.fire({
            title: 'answer honestly okie?',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Dont lie to me!',
                text: 'if you lie i bite your cheeks ya',
                showClass: {
                    popup: 'animate__animated animate__jackInTheBox'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            }).then(() => {
                Swal.fire({
                    title: 'put your name first',
                    showClass: {
                        popup: 'animate__animated animate__jackInTheBox'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    },
                    html: '<br><input class="form-control" placeholder="enter the name" id="input-field">',
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "enter the name",
                            type: "text",
                            id: "input-field",
                            className: "form-control"
                        },
                    },
                    buttons: {
                        cancel: {
                            visible: true,
                            className: 'btn btn-danger'
                        },
                        confirm: {
                            className: 'btn btn-success'
                        }
                    },
                }).then(
                    function () {
                        const nama = $('#input-field').val();
                        console.log(nama);
                        Swal.fire({
                            title: nama + ' ' + 'do you love me?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'yes, ilysm',
                            cancelButtonText: 'No',
                            showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOut'
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'i also love you so much ' + nama,
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then(() => {
                                    Swal.queue([{
                                        title: 'how much' + ' ' + nama + ' ' + 'loves me?',
                                        confirmButtonText: 'Submit',
                                        showCancelButton: true,
                                        text: 'i want to know how much you love me :3',
                                        showClass: {
                                            popup: 'animate__animated animate__jackInTheBox'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOut'
                                        },
                                        showLoaderOnConfirm: true,
                                        input: 'range',
                                        inputAttributes: {
                                            min: 10,
                                            max: 100,
                                            step: 10,
                                            class: "form-range"
                                        },
                                        inputValue: 20,
                                        preConfirm: function (value) {
                                            Swal.insertQueueStep({
                                                title: 'thank you for loving me' + ' ' + value + '%',
                                                icon: "info",
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }]).then(() => {
                                        Swal.fire({
                                            title: 'now' + ' ' + nama + ' ' + 'wanna be my valentine?',
                                            icon: 'question',
                                            type: 'question',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            },
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'yes',
                                            cancelButtonText: 'nope'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: 'wohoo thankyou ' + ' ' + nama + ' '+ 'sayang <3',
                                                    icon: 'info',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then(() => {
                                                    Swal.fire({
                                                        title: 'the last one',
                                                        icon: 'info',
                                                        text: 'just click ok ya!',
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#lope").removeClass("tulisan");
                                                        $.playSound('asset/audio/mine.mp3');
                                                        confetti.start();
                                                    })
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: 'why u dont wanna be my valentine :(',
                                                }).then(() => {
                                                    Swal.fire({
                                                        imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                        imageHeight: 300,
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("body,html").css("background-color", "#2d3436");
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#potek").removeClass("tulisan");
                                                        $(document).ready(function () {
                                                            var canvas = $('#canvas')[0];
                                                            canvas.width = window.innerWidth;
                                                            canvas.height = window.innerHeight;
                                                            if (canvas.getContext) {
                                                                var ctx = canvas.getContext('2d');
                                                                var w = canvas.width;
                                                                var h = canvas.height;
                                                                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                ctx.lineWidth = 1;
                                                                ctx.lineCap = 'round';
                                                                var init = [];
                                                                var maxParts = 1000;
                                                                for (var a = 0; a < maxParts; a++) {
                                                                    init.push({
                                                                        x: Math.random() * w,
                                                                        y: Math.random() * h,
                                                                        l: Math.random() * 1,
                                                                        xs: -4 + Math.random() * 4 + 2,
                                                                        ys: Math.random() * 10 + 10
                                                                    })
                                                                }
                                                                var particles = [];
                                                                for (var b = 0; b < maxParts; b++) {
                                                                    particles[b] = init[b];
                                                                }

                                                                function draw() {
                                                                    ctx.clearRect(0, 0, w, h);
                                                                    for (var c = 0; c < particles.length; c++) {
                                                                        var p = particles[c];
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(p.x, p.y);
                                                                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                        ctx.stroke();
                                                                    }
                                                                    move();
                                                                }

                                                                function move() {
                                                                    for (var b = 0; b < particles.length; b++) {
                                                                        var p = particles[b];
                                                                        p.x += p.xs;
                                                                        p.y += p.ys;
                                                                        if (p.x > w || p.y > h) {
                                                                            p.x = Math.random() * w;
                                                                            p.y = -20;
                                                                        }
                                                                    }
                                                                }
                                                                setInterval(draw, 30);
                                                            }
                                                        })
                                                        $.playSound('asset/audio/sadsongs.mp3');
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                Swal.fire({
                                    title: 'For real? Ill ask you again, do u love me?',
                                    icon: 'question',
                                    text: 'pwease try to answer correctly baby,-',
                                    showCancelButton: true,
                                    confirmButtonText: 'seriously, no',
                                    cancelButtonText: 'ya, i love u',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: 'ah okay :(',
                                        }).then(() => {
                                            Swal.fire({
                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                imageHeight: 300,
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            }).then(() => {
                                                $("body,html").css("background-color", "#2d3436");
                                                $("#tombolPopup").remove();
                                                $("#bubble").remove();
                                                $("#potek").removeClass("tulisan");
                                                $(document).ready(function () {
                                                    var canvas = $('#canvas')[0];
                                                    canvas.width = window.innerWidth;
                                                    canvas.height = window.innerHeight;
                                                    if (canvas.getContext) {
                                                        var ctx = canvas.getContext('2d');
                                                        var w = canvas.width;
                                                        var h = canvas.height;
                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                        ctx.lineWidth = 1;
                                                        ctx.lineCap = 'round';
                                                        var init = [];
                                                        var maxParts = 1000;
                                                        for (var a = 0; a < maxParts; a++) {
                                                            init.push({
                                                                x: Math.random() * w,
                                                                y: Math.random() * h,
                                                                l: Math.random() * 1,
                                                                xs: -4 + Math.random() * 4 + 2,
                                                                ys: Math.random() * 10 + 10
                                                            })
                                                        }
                                                        var particles = [];
                                                        for (var b = 0; b < maxParts; b++) {
                                                            particles[b] = init[b];
                                                        }

                                                        function draw() {
                                                            ctx.clearRect(0, 0, w, h);
                                                            for (var c = 0; c < particles.length; c++) {
                                                                var p = particles[c];
                                                                ctx.beginPath();
                                                                ctx.moveTo(p.x, p.y);
                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                ctx.stroke();
                                                            }
                                                            move();
                                                        }

                                                        function move() {
                                                            for (var b = 0; b < particles.length; b++) {
                                                                var p = particles[b];
                                                                p.x += p.xs;
                                                                p.y += p.ys;
                                                                if (p.x > w || p.y > h) {
                                                                    p.x = Math.random() * w;
                                                                    p.y = -20;
                                                                }
                                                            }
                                                        }
                                                        setInterval(draw, 30);
                                                    }
                                                })
                                                $.playSound('asset/audio/sadsongs.mp3');
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'i also love you so much ' + nama
                                        }).then(() => {
                                            Swal.queue([{
                                                title: 'how much' + ' ' + nama + ' ' + 'loves me?',
                                                confirmButtonText: 'Submit',
                                                showCancelButton: true,
                                                text: 'i want to know how much you love me :3',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                },
                                                showLoaderOnConfirm: true,
                                                input: 'range',
                                                inputAttributes: {
                                                    min: 10,
                                                    max: 100,
                                                    step: 10,
                                                    class: "form-range"
                                                },
                                                inputValue: 15,
                                                preConfirm: function (value) {
                                                    Swal.insertQueueStep({
                                                        title: 'thank you for loving me' + ' ' + value + '%',
                                                        icon: "info"
                                                    })
                                                },
                                                allowOutsideClick: () => !Swal.isLoading()
                                            }]).then(() => {
                                                Swal.fire({
                                                    title: 'now' + ' ' + nama + ' ' + 'wanna be my valentine?',
                                                    icon: 'question',
                                                    type: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'yes',
                                                    cancelButtonText: 'nope',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'wohoo thankyou ' + ' ' + nama + ' '+ 'sayang <3',
                                                            icon: 'info',
                                                            showClass: {
                                                                popup: 'animate__animated animate__jackInTheBox'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOut'
                                                            }
                                                        }).then(() => {
                                                            Swal.fire({
                                                                title: 'the last one',
                                                                icon: 'info',
                                                                text: 'just click ok ya!',
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#lope").removeClass("tulisan");
                                                                $.playSound('asset/audio/mine.mp3');
                                                                confetti.start();
                                                            })
                                                        })
                                                    } else {
                                                        Swal.fire({
                                                            title: 'ah okay :(',
                                                        }).then(() => {
                                                            Swal.fire({
                                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                                imageHeight: 300,
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("body,html").css("background-color", "#2d3436");
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#potek").removeClass("tulisan");
                                                                $(document).ready(function () {
                                                                    var canvas = $('#canvas')[0];
                                                                    canvas.width = window.innerWidth;
                                                                    canvas.height = window.innerHeight;
                                                                    if (canvas.getContext) {
                                                                        var ctx = canvas.getContext('2d');
                                                                        var w = canvas.width;
                                                                        var h = canvas.height;
                                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                        ctx.lineWidth = 1;
                                                                        ctx.lineCap = 'round';
                                                                        var init = [];
                                                                        var maxParts = 1000;
                                                                        for (var a = 0; a < maxParts; a++) {
                                                                            init.push({
                                                                                x: Math.random() * w,
                                                                                y: Math.random() * h,
                                                                                l: Math.random() * 1,
                                                                                xs: -4 + Math.random() * 4 + 2,
                                                                                ys: Math.random() * 10 + 10
                                                                            })
                                                                        }
                                                                        var particles = [];
                                                                        for (var b = 0; b < maxParts; b++) {
                                                                            particles[b] = init[b];
                                                                        }

                                                                        function draw() {
                                                                            ctx.clearRect(0, 0, w, h);
                                                                            for (var c = 0; c < particles.length; c++) {
                                                                                var p = particles[c];
                                                                                ctx.beginPath();
                                                                                ctx.moveTo(p.x, p.y);
                                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                ctx.stroke();
                                                                            }
                                                                            move();
                                                                        }

                                                                        function move() {
                                                                            for (var b = 0; b < particles.length; b++) {
                                                                                var p = particles[b];
                                                                                p.x += p.xs;
                                                                                p.y += p.ys;
                                                                                if (p.x > w || p.y > h) {
                                                                                    p.x = Math.random() * w;
                                                                                    p.y = -20;
                                                                                }
                                                                            }
                                                                        }
                                                                        setInterval(draw, 30);
                                                                    }
                                                                })
                                                                $.playSound('asset/audio/sadsongs.mp3');
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                )
            })
        })
    })
});