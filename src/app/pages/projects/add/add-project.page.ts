import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";

import {LoadingService} from "src/app/services/loading.service";
import {ProjectService} from "../../../services/project.service";
import {UserService} from "../../../services/user.service";
import {AlertService} from "../../../services/alert.service";

import {Project} from 'src/app/interfaces/project.interface';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: "add-project",
  templateUrl: "./add-project.page.html",
  styleUrls: ["./add-project.page.scss"]
})
export class AddProjectPage implements OnInit {

  newProjectForm: FormGroup;

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;

  constructor(
    private projectService: ProjectService,
    private user: UserService,
    public alert: AlertService,
    private router: Router,
    public formBuilder: FormBuilder,
    private loading: LoadingService
  ) {
    this.newProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      budget: ['', [Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]],
      description: ['', Validators.maxLength(1500)],
      sourceLanguage: [''],
      targetLanguage: [''],
      serviceType: [''],
      dueDate: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public async onSubmit() {

    if (this.newProjectForm.invalid) {
      this.validateAllFormFields(this.newProjectForm);
      return;
    }

    const loadingDialog = await this.loading.create({
      message: "Creating Project..."
    })

    const newProjectData: Project = {
      userId: this.user.id$.getValue(),
      name: this.newProjectForm.get('name').value,
      budget: this.newProjectForm.get('budget').value,
      description: this.newProjectForm.get('description').value,
      quoteStatus: "quote_requested",
      sourceLanguage: this.newProjectForm.get('sourceLanguage').value,
      targetLanguage: this.newProjectForm.get('targetLanguage').value,
      serviceType: this.newProjectForm.get('serviceType').value,
      dueDate: this.newProjectForm.get('dueDate').value
    }

    const createdProject = await this.projectService.createProject(newProjectData);

    if (this.fileInput && this.fileInput.nativeElement.files) {
      for (let file of this.fileInput.nativeElement.files) {
        await this.projectService.uploadProjectRequirementFile(createdProject.id, file)
      }
    }

    loadingDialog.dismiss();
    this.router.navigateByUrl("/projects");
  }

}
